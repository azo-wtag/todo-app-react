import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "components/home/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import TaskCard from "components/task/existing-task/task-card";
import FilterBtnContainer from "components/filter-btn-container";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  const handleSuccessfulTaskEntry = () => setIsNewTaskRequested(false);
  const handleCreateBtnClick = () => setIsNewTaskRequested(true);

  return (
    <div className={`container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.buttonContainer}`}>
        <Button onButtonClick={handleCreateBtnClick}>Create</Button>

        <FilterBtnContainer />
      </div>

      <div className="grid grid-cols-3 gap-34px">
        {isNewTaskRequested && (
          <CreateTask onSuccessfullTaskEntry={handleSuccessfulTaskEntry} />
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
