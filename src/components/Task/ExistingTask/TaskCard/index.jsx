import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import ActionButtonGroup from "components/ActionButtonGroup";
import { formatDate } from "utils/helper";
import { deleteTask } from "store/actions/todo";
import styles from "components/Task/ExistingTask/TaskCard/index.module.scss";

function TaskCard({ id, createdAt, title }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(deleteTask(id));
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date),
};

export default TaskCard;
