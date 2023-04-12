import React, { useState } from "react";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import classnames from "classnames";

import styles from "components/task/existing-task/task-card/index.module.scss";
import ButtonContainer from "components/task/existing-task/button-container";
import Button from "components/base/button";
import EditTaskForm from "components/task/existing-task/edit-task";
import { TASK_DATE_FORMAT, TASK_DELETED_SUCCESS_MESSAGE } from "utils/const";
import { validateDayjsDate } from "utils/helper/validation";
import { decreaseNumOfVisibleTasks, setisLoading } from "store/actions/filter";
import { showErrorToast } from "utils/toast";
import { deleteTask, markAsDone } from "store/actions/todo";
import { calculateDateDifference } from "utils/helper";

function TaskCard({
  taskId,
  title,
  createdAt,
  isCompleted,
  isTaskOnEditMode,
  completedAt,
}) {
  const dispatch = useDispatch();

  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);
  const formatDate = (date) =>
    dayjs(date, TASK_DATE_FORMAT).format(TASK_DATE_FORMAT);

  const tasks = useSelector((state) => state.todo.tasks);
  const numOfCardVisible = useSelector(
    (state) => state.filter.visibleCardCount
  );
  const handleDeleButtonClick = () => {
    dispatch(setisLoading(true));
    dispatch(deleteTask(taskId));
    showErrorToast(TASK_DELETED_SUCCESS_MESSAGE);
    if (tasks.length === numOfCardVisible)
      dispatch(decreaseNumOfVisibleTasks());
    dispatch(setisLoading(false));
  };

  const taskHeaderClasses = classnames(styles.header, "fw-700", "text-grey1", {
    "text-line-through text-green1": isCompleted,
  });

  if (isTextAreaVisible) {
    return (
      <div className={styles.card}>
        <EditTaskForm
          taskId={taskId}
          existingTitle={title}
          onDeleteBtnClick={() => setIsTextAreaVisible(false)}
          onTaskEdit={() => setIsTextAreaVisible(false)}
        />
      </div>
    );
  } else
    return (
      <div className={`bg-white ${styles.card}`}>
        <h3 className={taskHeaderClasses}>{title}</h3>
        <p className={`text-grey2 ${styles.date}`}>
          Created At: {formatDate(createdAt)}
        </p>
        <div className="flex justify-between">
          <ButtonContainer
            onDoneButtonClick={() => dispatch(markAsDone(taskId))}
            onEditButtonClick={() => setIsTextAreaVisible(true)}
            onDeleteButtonClick={handleDeleButtonClick}
            isTaskCompleted={isCompleted}
          />
          {isCompleted && (
            <Button
              className={`bg-violet2 text-white1 ${styles.completedText}`}
            >
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
