import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import classnames from "classnames";
import ActionButtonGroup from "components/ActionButtonGroup";
import CompletedDays from "components/Common/CompletedDays";
import { formatDate } from "utils/helper";
import { deleteTask, markAsDone } from "store/actions/todo";
import styles from "components/Task/ExistingTask/TaskCard/index.module.scss";

function TaskCard({ id, createdAt, title, isCompleted, completedAt }) {
  const dispatch = useDispatch();

  function handleDeleteClick() {
    dispatch(deleteTask(id));
  }

  function handleDoneClick() {
    dispatch(markAsDone(id));
  }

  const taskHeaderClasses = classnames({ "text-line-through": isCompleted });

  return (
    <div className={styles.card}>
      <h3 className={taskHeaderClasses}>{title}</h3>
      <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
      <div className="flex justify-between">
        <ActionButtonGroup
          isTaskCompleted={isCompleted}
          onDeleteClick={handleDeleteClick}
          onDoneClick={handleDoneClick}
        />
        {isCompleted && (
          <CompletedDays endDate={completedAt} startDate={createdAt} />
        )}
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
