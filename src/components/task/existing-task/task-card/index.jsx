import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import classnames from "classnames";
import styles from "components/task/existing-task/task-card/index.module.scss";
import Button from "components/base/button";
import EditTaskForm from "components/task/existing-task/edit-task";
import ButtonContainer from "components/task/existing-task/button-container";
import {
  TASK_DATE_FORMAT,
  SUCCESS_MESSAGE_TASK_DELETED,
  SUCCESS_MESSAGE_TASK_DONE,
} from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import { showSuccessToast } from "utils/toast";
import { calculateDateDifference } from "utils/helper";
import { deleteTask, markAsDone } from "store/actions/todo";
import { decreaseNumOfVisibleTasks } from "store/actions/filter";

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
    showSuccessToast(SUCCESS_MESSAGE_TASK_DELETED);
    if (tasks.length === numOfCardVisible) {
      dispatch(decreaseNumOfVisibleTasks());
    }
  }

  function handleDoneClick() {
    dispatch(markAsDone(taskId));
    showSuccessToast(SUCCESS_MESSAGE_TASK_DONE);
  }

  const tasks = useSelector((state) => state.todo.tasks);
  const numOfCardVisible = useSelector(
    (state) => state.filter.visibleCardCount
  );

  const taskHeaderClasses = classnames(
    styles.header,
    "fw-700",
    "text-grey-ship",
    {
      "text-line-through text-green-mint": isCompleted,
    }
  );

  if (isTextAreaVisible) {
    return (
      <div className={styles.card}>
        <EditTaskForm
          taskId={taskId}
          existingTitle={title}
          onDelete={hideEditTaskFrom}
          onTaskEdit={hideEditTaskFrom}
        />
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <h3 className={taskHeaderClasses}>{title}</h3>
        <p className={`text-grey-french ${styles.date}`}>
          Created At: {formatDate(createdAt)}
        </p>
        <div className="flex justify-between">
          <ButtonContainer
            isTaskCompleted={isCompleted}
            onDoneClick={handleDoneClick}
            onEditClick={showEditTaskForm}
            onDeleteClick={handleDeleteClick}
          />
          {isCompleted && (
            <Button
              className={`bg-blue-lavender text-white ${styles.completedText}`}
            >
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
