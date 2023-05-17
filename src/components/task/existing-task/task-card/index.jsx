import React from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import classnames from "classnames";
import styles from "components/task/existing-task/task-card/index.module.scss";
import Button from "components/base/button";
import ButtonGroup from "components/task/existing-task/button-group";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import { deleteTask, markAsDone } from "store/actions/todo";
import { calculateDateDifference } from "utils/helper";

function TaskCard({ taskId, createdAt, isCompleted, completedAt, title }) {
  const dispatch = useDispatch();

  function formatDate(date) {
    return dayjs(date).format(TASK_DATE_FORMAT);
  }

  function handleDeleteClick() {
    dispatch(deleteTask(taskId));
  }

  function handleDoneClick() {
    dispatch(markAsDone(taskId));
  }

  const taskHeaderClasses = classnames({ "text-line-through": isCompleted });

  return (
    <div className={styles.card}>
      <h3 className={taskHeaderClasses}>{title}</h3>
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ButtonGroup
          isTaskCompleted={isCompleted}
          onDeleteClick={handleDeleteClick}
          onDoneClick={handleDoneClick}
        />
        {isCompleted && (
          <Button>
            Completed in days {calculateDateDifference(completedAt, createdAt)}
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
  completedAt: validateDayjsDate,
  isTaskOnEditMode: propTypes.bool,
};

TaskCard.defaultProps = {
  isTaskOnEditMode: false,
};

export default TaskCard;
