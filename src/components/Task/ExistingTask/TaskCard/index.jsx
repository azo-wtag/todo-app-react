import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ActionButtonGroup from "components/ActionButtonGroup";
import { validateDate } from "utils/helper/validation";
import { formatDate } from "utils/helper";
import { deleteTask } from "store/actions/todo";
import styles from "components/Task/ExistingTask/TaskCard/index.module.scss";

function TaskCard({ taskId, createdAt, title }) {
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
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  taskId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: validateDate,
};

export default TaskCard;
