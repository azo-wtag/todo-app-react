import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "components/home-container/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import FilterBtnContainer from "components/filter-btn-container";
import NoTaskFound from "components/not-found/task";
import LoadMoreBtnContainer from "components/load-more-btn-container";
import ExistingTaskCardContaienr from "components/task/existing-task/container";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const numOfCardVisible = useSelector(
    (state) => state.filter.visibleCardCount
  );
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  return (
    <div className={`home-container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.buttonContainer}`}>
        <Button onButtonClick={() => setIsNewTaskRequested(true)}>
          Create
        </Button>

        <FilterBtnContainer />
      </div>

      <div className="grid grid-cols-3 card-gap">
        {isNewTaskRequested && (
          <CreateTask
            onSuccessfullTaskEntry={() => setIsNewTaskRequested(false)}
            onDeleteBtnClick={() => setIsNewTaskRequested(false)}
          />
        )}

        <ExistingTaskCardContaienr tasks={tasks.slice(0, numOfCardVisible)} />
      </div>

      {tasks.length <= 0 ? <NoTaskFound /> : <LoadMoreBtnContainer />}
    </div>
  );
}

export default HomeContainer;
