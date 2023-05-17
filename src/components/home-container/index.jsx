import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "components/home-container/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import TaskCard from "components/task/existing-task/task-card";
import FilterButtonGroup from "components/filter-button-group";
import NoTaskFound from "components/not-found/task";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  function showNewTaskCard() {
    setIsNewTaskRequested(true);
  }

  function hideNewTaskCard() {
    setIsNewTaskRequested(false);
  }

  const isTaskAvailable = tasks.length > 0;

  return (
    <div className={`home-container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.actionBarContainer}`}>
        <Button onClick={showNewTaskCard}>Create</Button>
        <FilterButtonGroup />
      </div>

      <div className="grid grid-cols-3 card-gap">
        {isNewTaskRequested && (
          <CreateTask
            onSuccessfullTaskEntry={hideNewTaskCard}
            onDeleteClick={hideNewTaskCard}
          />
        )}
        {isTaskAvailable &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              taskId={task.id}
              title={task.title}
              createdAt={task.createdAt}
              isCompleted={task.isCompleted}
              completedAt={task.completedAt}
            />
          ))}
      </div>

      {!isTaskAvailable ? (
        <NoTaskFound />
      ) : (
        <div className="flex justify-center">
          <Button className={styles.loadMoreBtn}>Load More</Button>
        </div>
      )}
    </div>
  );
}

export default HomeContainer;
