import React from "react";
import propTypes from "prop-types";
import TaskCard from "components/task/existing-task/task-card";

function ExistingTaskCardContaienr({ tasks }) {
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
}

ExistingTaskCardContaienr.propTypes = {
  tasks: propTypes.array.isRequired,
};

export default ExistingTaskCardContaienr;
