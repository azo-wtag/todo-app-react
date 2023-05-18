import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "components/common/button";
import CreateTask from "components/task/create-new";
import TaskCard from "components/task/existing-task/task-card";
import FilterButtonGroup from "components/filter-button-group";
import styles from "components/home-container/index.module.scss";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  function showNewTaskCard() {
    setIsNewTaskRequested(true);
  }

  function hideNewTaskCard() {
    setIsNewTaskRequested(false);
  }

  return (
    <div className={`home-container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.actionBarContainer}`}>
        <Button onClick={showNewTaskCard}>Create</Button>
        <FilterButtonGroup />
      </div>

      <div className="grid grid-cols-3 card-gap">
        {isNewTaskRequested && (
          <CreateTask onSuccessfullTaskEntry={hideNewTaskCard} />
        )}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            createdAt={task.createdAt}
            isCompleted={task.isCompleted}
            completedAt={task.completedAt}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Button className={styles.loadMoreBtn}>Load More</Button>
      </div>
    </div>
  );
}

export default HomeContainer;
