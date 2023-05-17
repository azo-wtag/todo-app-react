import React from "react";
import propTypes from "prop-types";
import dayjs from "dayjs";
import styles from "components/task/existing-task/task-card/index.module.scss";
import Button from "components/base/button";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import ButtonGroup from "components/task/existing-task/button-group";

function TaskCard({ createdAt, isCompleted, title }) {
  function formatDate(date) {
    return dayjs(date).format(TASK_DATE_FORMAT);
  }

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ButtonGroup />
        {isCompleted && <Button>Completed in days</Button>}
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  title: propTypes.string.isRequired,
  createdAt: validateDayjsDate,
  isCompleted: propTypes.bool.isRequired,
};

export default TaskCard;
