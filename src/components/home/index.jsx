import React, { useState } from "react";
import { useSelector } from "react-redux";

import Button from "../base/button";
import NoTaskFound from "../not-found/task";
import CreateTask from "../task/create-new";
import TaskCard from "../task/existing-card";
import Styles from "./index.module.scss";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  const handleSuccessfulTaskEntry = () => {
    setIsNewTaskRequested(false);
  };

  return (
    <div className={`container mx-auto ${Styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${Styles.buttonContainer}`}>
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

        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              indexNo={index}
              title={task.title}
              createdAt={task.createdAt}
              isCompleted={task.isCompleted}
              completedAt={task.completedAt}
            />
          ))
        ) : (
          <NoTaskFound />
        )}
      </div>

      <div className="flex justify-center">
        <Button className={Styles.loadMoreBtn}>Load More</Button>
      </div>
    </div>
  );
}

export default HomeContainer;
