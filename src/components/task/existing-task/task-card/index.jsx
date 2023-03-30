import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import classnames from "classnames";

import styles from "components/task/existing-task/task-card/index.module.scss";
import ButtonContainer from "components/task/existing-task/button-container";
import Button from "components/base/button";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import { deleteTaskFromTodo, markTaskAsDone } from "store/actions/todo";
import EditTaskForm from "components/task/existing-task/edit-task";

function TaskCard({
  taskId,
  title,
  createdAt,
  isCompleted,
  isTaskOnEditMode,
  completedAt,
}) {
  const dispatch = useDispatch();

  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);
  const formatDate = (date) =>
    dayjs(date, TASK_DATE_FORMAT).format(TASK_DATE_FORMAT);
  const calculateDateDifference = (startDate, endDate = dayjs()) =>
    endDate.diff(startDate, "day") + 1;

  const taskHeaderClasses = classnames({ "text-line-thorught": isCompleted });

  if (isTextAreaVisible) {
    return (
      <div className={styles.card}>
        <EditTaskForm
          taskId={taskId}
          existingTitle={title}
          onDeleteBtnClick={() => setIsTextAreaVisible(false)}
          onTaskEdit={() => setIsTextAreaVisible(false)}
        />
      </div>
    );
  } else
    return (
      <div className={styles.card}>
        <h3 className={taskHeaderClasses}>{title}</h3>
        <p className={styles.date}>created At: {formatDate(createdAt)}</p>
        <div className="flex justify-between">
          <ButtonContainer
            onDoneButtonClick={() => dispatch(markTaskAsDone(taskId))}
            onEditButtonClick={() => setIsTextAreaVisible(true)}
            onDeleteButtonClick={() => dispatch(deleteTaskFromTodo(taskId))}
            isTaskCompleted={isCompleted}
          />
          {isCompleted && (
            <Button>
              Completed in {calculateDateDifference(completedAt)} days
            </Button>
          )}
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
  completedAt: validateDayjsDate,
};

TaskCard.defaultProps = {
  isTaskOnEditMode: false,
};

export default TaskCard;
