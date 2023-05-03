import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import classnames from "classnames";
import styles from "components/task/existing-task/task-card/index.module.scss";
import ButtonContainer from "components/task/existing-task/button-container";
import Button from "components/base/button";
import EditTaskForm from "components/task/existing-task/edit-task";
import { TASK_DATE_FORMAT } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import { decreaseNumOfVisibleTasks } from "store/actions/filter";
import { deleteTask, markAsDone } from "store/actions/todo";
import { calculateDateDifference } from "utils/helper";

function TaskCard({
  createdAt,
  completedAt,
  isCompleted,
  isTaskOnEditMode,
  taskId,
  title,
}) {
  const dispatch = useDispatch();

  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);

  function formatDate(date) {
    return dayjs(date).format(TASK_DATE_FORMAT);
  }

  function handleDeleteClick() {
    dispatch(deleteTask(taskId));
    if (tasks.length === numOfCardVisible)
      dispatch(decreaseNumOfVisibleTasks());
  }

  function handleDoneClick() {
    dispatch(markAsDone(taskId));
  }

  const tasks = useSelector((state) => state.todo.tasks);
  const numOfCardVisible = useSelector(
    (state) => state.filter.visibleCardCount
  );

  const taskHeaderClasses = classnames({ "text-line-through": isCompleted });

  if (isTextAreaVisible) {
    return (
      <div className={styles.card}>
        <EditTaskForm
          taskId={taskId}
          existingTitle={title}
          onDelete={() => setIsTextAreaVisible(false)}
          onTaskEdit={() => setIsTextAreaVisible(false)}
        />
      </div>
    );
  } else
    return (
      <div className={styles.card}>
        <h3 className={taskHeaderClasses}>{title}</h3>
        <p className={styles.date}>Created At: {formatDate(createdAt)}</p>
        <div className="flex justify-between">
          <ButtonContainer
            isTaskCompleted={isCompleted}
            onDoneClick={handleDoneClick}
            onEditClick={() => setIsTextAreaVisible(true)}
            onDeleteClick={handleDeleteClick}
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

TaskCard.propTypes = {
  taskId: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  createdAt: validateDayjsDate,
  isCompleted: propTypes.bool.isRequired,
  isTaskOnEditMode: propTypes.bool,
  completedAt: validateDayjsDate,
};

TaskCard.defaultProps = {
  isTaskOnEditMode: false,
};

export default TaskCard;
