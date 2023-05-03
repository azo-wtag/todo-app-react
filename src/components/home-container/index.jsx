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

  function handleCreateClick() {
    setIsNewTaskRequested(true);
  }

  function handleNewTaskEntry() {
    setIsNewTaskRequested(false);
  }

  function handleDeleteClick() {
    setIsNewTaskRequested(false);
  }

  const isTaskEmpty = tasks.length <= 0;

  return (
    <div className={`home-container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.actionBarContainer}`}>
        <Button onClick={handleCreateClick}>Create</Button>
        <FilterBtnContainer />
      </div>

      <div className="grid grid-cols-3 card-gap">
        {isNewTaskRequested && (
          <CreateTask
            onSuccessfullTaskEntry={handleNewTaskEntry}
            onDeleteClick={handleDeleteClick}
          />
        )}

        <ExistingTaskCardContaienr tasks={tasks.slice(0, numOfCardVisible)} />
      </div>

      {isTaskEmpty ? <NoTaskFound /> : <LoadMoreBtnContainer />}
    </div>
  );
}

export default HomeContainer;
