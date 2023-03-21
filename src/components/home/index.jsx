import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./index.module.scss";
import Button from "../base/button";
import CreateTask from "components/task/create-new";
import TaskCard from "components/task/existing-card";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  const handleSuccessfulTaskEntry = () => {
    setIsNewTaskRequested(false);
  };

  return (
    <div className={`container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.buttonContainer}`}>
        <Button onButtonClick={() => setIsNewTaskRequested(true)}>
          Create
        </Button>

        <div>
          <Button>All</Button>
          <Button>Incomplete</Button>
          <Button>Complete</Button>
        </div>
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
