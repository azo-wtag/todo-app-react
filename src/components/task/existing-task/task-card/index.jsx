import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ActionButtonGroup from "components/task/existing-task/action-button-group";
import { validateDate } from "utils/helper/validation";
import { formatDate } from "utils/helper";
import { deleteTask } from "store/actions/todo";
import styles from "components/task/existing-task/task-card/index.module.scss";

function TaskCard({ taskId, title, createdAt, isCompleted }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(deleteTask(taskId));
  }

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ActionButtonGroup onDeleteClick={handleDeleteClick} />
        {isCompleted && <div>Completed in days</div>}
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: validateDate,
  isCompleted: PropTypes.bool.isRequired,
};

export default TaskCard;
