import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import styles from "components/task/existing-task/task-card/index.module.scss";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import { TASK_TEXTAREA_NUM_OF_ROW } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import ButtonContainer from "components/task/existing-task/button-container";
import { deleteTaskFromTodo } from "store/actions/todo";

function TaskCard({
  indexNo,
  title,
  createdAt,
  isCompleted,
  isTaskOnEditMode,
}) {
  const dispatch = useDispatch();

  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);
  const formatDate = (date) => dayjs(date, "YYYY-MM-DD").format("YYYY-MM-DD");

  return (
    <div className={styles.card}>
      {isTextAreaVisible ? (
        <TextArea numOfRows={TASK_TEXTAREA_NUM_OF_ROW} />
      ) : (
        <h3>{title}</h3>
      )}

      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>

      <div className="flex justify-between">
        <ButtonContainer
          onEditButtonClick={() => setIsTextAreaVisible(true)}
          onDeleteButtonClick={() => dispatch(deleteTaskFromTodo(indexNo))}
        />
        {isCompleted && <Button>Completed in days</Button>}
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  indexNo: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  createdAt: validateDayjsDate,
  isCompleted: propTypes.bool.isRequired,
  isTaskOnEditMode: propTypes.bool,
};

TaskCard.defaultProps = {
  isTaskOnEditMode: false,
};

export default TaskCard;
