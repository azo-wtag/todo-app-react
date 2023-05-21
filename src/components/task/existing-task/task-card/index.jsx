import React from "react";
import PropTypes from "prop-types";
import ActionButtonGroup from "components/task/existing-task/action-button-group";
import { validateDate } from "utils/helper/validation";
import { formatDate } from "utils/helper";
import styles from "components/task/existing-task/task-card/index.module.scss";

function TaskCard({ createdAt, isCompleted, title }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ActionButtonGroup />
        {isCompleted && <div>Completed in days</div>}
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: validateDate,
  isCompleted: PropTypes.bool.isRequired,
};

export default TaskCard;
