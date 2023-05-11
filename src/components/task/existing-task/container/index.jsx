import React from "react";
import propTypes from "prop-types";
import TaskCard from "components/task/existing-task/task-card";

function TaskCardContainer({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          taskId={task.id}
          title={task.title}
          createdAt={task.createdAt}
          isCompleted={task.isCompleted}
          completedAt={task.completedAt}
        />
      ))}
    </>
  );
}

TaskCardContainer.propTypes = {
  tasks: propTypes.array.isRequired,
};

export default TaskCardContainer;
