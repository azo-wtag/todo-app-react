import React from "react";
import PropTypes from "prop-types";
import ActionButtonGroup from "components/ActionButtonGroup";
import { validateDate } from "utils/helper/validation";
import { formatDate } from "utils/helper";
import styles from "components/Task/ExistingTask/TaskCard/index.module.scss";

function TaskCard({ createdAt, title }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ActionButtonGroup />
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: validateDate,
};

export default TaskCard;
