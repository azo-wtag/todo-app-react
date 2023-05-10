import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "components/home-container/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import FilterBtnContainer from "components/filter-btn-container";
import NoTaskFound from "components/not-found/task";
import LoadMoreBtnContainer from "components/load-more-btn-container";
import TaskCardContainer from "components/task/existing-task/container";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const numOfCardVisible = useSelector(
    (state) => state.filter.visibleCardCount
  );
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  function showNewTaskCard() {
    setIsNewTaskRequested(true);
  }

  function hideNewTaskCard() {
    setIsNewTaskRequested(false);
  }

  const isTaskEmpty = tasks.length <= 0;
  const paginatedTasks = tasks.slice(0, numOfCardVisible);

  return (
    <div className={`home-container mx-auto ${styles.homeWrapper}`}>
      <h1>Add Tasks</h1>
      <div className={`flex justify-between ${styles.actionBarContainer}`}>
        <Button onClick={showNewTaskCard}>Create</Button>
        <FilterBtnContainer />
      </div>

      <div className="grid grid-cols-3 card-gap">
        {isNewTaskRequested && (
          <CreateTask
            onSuccessfullTaskEntry={hideNewTaskCard}
            onDeleteClick={hideNewTaskCard}
          />
        )}

        <TaskCardContainer tasks={paginatedTasks} />
      </div>

      {isTaskEmpty ? <NoTaskFound /> : <LoadMoreBtnContainer />}
    </div>
  );
}

export default HomeContainer;
