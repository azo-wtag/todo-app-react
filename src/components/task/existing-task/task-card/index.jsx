import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import classnames from "classnames";
import styles from "components/task/existing-task/task-card/index.module.scss";
import Button from "components/base/button";
import EditTaskForm from "components/task/existing-task/edit-task";
import ButtonContainer from "components/task/existing-task/button-container";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import { calculateDateDifference } from "utils/helper";
import { deleteTask, markAsDone } from "store/actions/todo";

function TaskCard({
  createdAt,
  isCompleted,
  completedAt,
  isTaskOnEditMode,
  taskId,
  title,
}) {
  const dispatch = useDispatch();

  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);

  function formatDate(date) {
    return dayjs(date).format(TASK_DATE_FORMAT);
  }

  function showEditTaskForm() {
    setIsTextAreaVisible(true);
  }

  function hideEditTaskFrom() {
    setIsTextAreaVisible(false);
  }

  function handleDeleteClick() {
    dispatch(deleteTask(taskId));
  }

  function handleDoneClick() {
    dispatch(markAsDone(taskId));
  }

  const taskHeaderClasses = classnames({ "text-line-through": isCompleted });

  if (isTextAreaVisible) {
    return (
      <div className={styles.card}>
        <EditTaskForm
          taskId={taskId}
          existingTitle={title}
          onDelete={hideEditTaskFrom}
          onTaskEdit={hideEditTaskFrom}
        />
        {isCompleted && (
          <Button>
            Completed in days {calculateDateDifference(completedAt, createdAt)}
          </Button>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <h3 className={taskHeaderClasses}>{title}</h3>
        <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
        <div className="flex justify-between">
          <ButtonContainer
            onDoneClick={handleDoneClick}
            onEditClick={showEditTaskForm}
            onDeleteClick={handleDeleteClick}
            isTaskCompleted={isCompleted}
          />
          {isCompleted && (
            <Button>
              Completed in {calculateDateDifference(completedAt, createdAt)}
            </Button>
          )}
        </div>
      </div>
    );
  }
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
