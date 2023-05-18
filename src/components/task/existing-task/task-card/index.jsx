import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import ActionButtonGroup from "components/task/existing-task/action-button-group";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import styles from "components/task/existing-task/task-card/index.module.scss";

function TaskCard({ createdAt, isCompleted, title }) {
  function formatDate(date) {
    return dayjs(date).format(TASK_DATE_FORMAT);
  }

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
  createdAt: validateDayjsDate,
  isCompleted: PropTypes.bool.isRequired,
};

export default TaskCard;
