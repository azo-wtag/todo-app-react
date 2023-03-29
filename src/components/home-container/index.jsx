import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "components/home-container/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import TaskCard from "components/task/existing-task/task-card";
import FilterBtnContainer from "components/filter-btn-container";
import NoTaskFound from "components/not-found/task";
import LoadMoreBtnContainer from "components/load-more-btn-container";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const noOfCardVisible = useSelector((state) => state.filter.visibleCardCount);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  return (
    <div className={`container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.buttonContainer}`}>
        <Button onButtonClick={() => setIsNewTaskRequested(true)}>
          Create
        </Button>

        <FilterBtnContainer />
      </div>

      <div className="grid grid-cols-3 gap-34px">
        {isNewTaskRequested && (
          <CreateTask
            onSuccessfullTaskEntry={() => setIsNewTaskRequested(false)}
            onDeleteBtnClick={() => setIsNewTaskRequested(false)}
          />
        )}

        {tasks.length > 0 &&
          tasks
            .slice(0, noOfCardVisible - 1)
            .map((task, index) => (
              <TaskCard
                key={task.id}
                indexNo={index}
                title={task.title}
                createdAt={task.createdAt}
                isCompleted={task.isCompleted}
                completedAt={task.completedAt}
              />
            ))}
      </div>

      {tasks.length <= 0 ? <NoTaskFound /> : <LoadMoreBtnContainer />}
    </div>
  );
}

export default HomeContainer;
