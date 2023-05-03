import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import styles from "components/task/existing-task/task-card/index.module.scss";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import ButtonContainer from "components/task/existing-task/button-container";
import { deleteTask } from "store/actions/todo";

function TaskCard({ createdAt, isCompleted, isTaskOnEditMode, taskId, title }) {
  const dispatch = useDispatch();

  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);

  function formatDate(date) {
    dayjs(date).format(TASK_DATE_FORMAT);
  }

  function handleEditClick() {
    setIsTextAreaVisible(true);
  }

  function handleDeleteClick() {
    dispatch(deleteTask(taskId));
  }

  return (
    <div className={styles.card}>
      {isTextAreaVisible ? <TextArea /> : <h3>{title}</h3>}
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ButtonContainer
          onEditButtonClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
        {isCompleted && <Button>Completed in days</Button>}
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  taskId: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  createdAt: validateDayjsDate,
  isCompleted: propTypes.bool.isRequired,
  isTaskOnEditMode: propTypes.bool,
};

TaskCard.defaultProps = {
  isTaskOnEditMode: false,
};

export default TaskCard;
