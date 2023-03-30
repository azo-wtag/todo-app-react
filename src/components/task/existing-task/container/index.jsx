import React from "react";
import propTypes from "prop-types";
import { useSelector } from "react-redux";
import TaskCard from "components/task/existing-task/task-card";
import { TASK_FILTER_ALL, TASK_FILTER_COMPLETED } from "utils/const";

function ExistingTaskCardContaienr({ tasks }) {
  const taskFilteredState = useSelector(
    (state) => state.filter.filteredCardState
  );

  if (taskFilteredState === TASK_FILTER_ALL)
    return (
      <>
        {tasks.map((task, index) => (
          <TaskCard
            key={task.id}
            indexNo={index}
            title={task.title}
            createdAt={task.createdAt}
            isCompleted={task.isCompleted}
            completedAt={task.completedAt}
          />
        ))}
      </>
    );
  else if (taskFilteredState === TASK_FILTER_COMPLETED)
    return (
      <>
        {tasks.map(
          (task, index) =>
            task.isCompleted && (
              <TaskCard
                key={task.id}
                indexNo={index}
                title={task.title}
                createdAt={task.createdAt}
                isCompleted={task.isCompleted}
                completedAt={task.completedAt}
              />
            )
        )}
      </>
    );

  return (
    <>
      {tasks.map(
        (task, index) =>
          !task.isCompleted && (
            <TaskCard
              key={task.id}
              indexNo={index}
              title={task.title}
              createdAt={task.createdAt}
              isCompleted={task.isCompleted}
              completedAt={task.completedAt}
            />
          )
      )}
    </>
  );
}

ExistingTaskCardContaienr.propTypes = {
  tasks: propTypes.array.isRequired,
};

export default ExistingTaskCardContaienr;
