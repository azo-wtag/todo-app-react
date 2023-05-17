import React from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import styles from "components/task/existing-task/task-card/index.module.scss";
import Button from "components/base/button";
import ButtonGroup from "components/task/existing-task/button-group";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import { deleteTask } from "store/actions/todo";

function TaskCard({ taskId, createdAt, isCompleted, title }) {
  const dispatch = useDispatch();

  function formatDate(date) {
    return dayjs(date).format(TASK_DATE_FORMAT);
  }

  function handleDeleteClick() {
    dispatch(deleteTask(taskId));
  }

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ButtonGroup onDeleteClick={handleDeleteClick} />
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
};

export default TaskCard;
