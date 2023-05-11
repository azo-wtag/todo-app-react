import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "components/home-container/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import FilterBtnContainer from "components/filter-btn-container";
import NoTaskFound from "components/not-found/task";
import LoadMoreBtnContainer from "components/load-more-btn-container";
import TaskCardContainer from "components/task/existing-task/container";
import Image from "components/base/image";
import {
  ALT_PLUS_ICON_TAG,
  ICON_PLUS,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";
import { filterTaskByStatusTitle, filterTaskByTitle } from "utils/helper";
import { resetVisibleTaskCount, toggleIsFiltering } from "store/actions/filter";

function HomeContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const numOfCardVisible = useSelector(
    (state) => state.filter.visibleCardCount
  );
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  const filteredState = useSelector((state) => state.filter.filteredCardState);
  const searchKey = useSelector((state) => state.filter.searchKey);
  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    function filterTasks() {
      dispatch(toggleIsFiltering(true));
      const isCompleted = true;
      if (filteredState === TASK_FILTER_COMPLETED) {
        setFilteredTasks(
          filterTaskByStatusTitle(tasks, isCompleted, searchKey)
        );
      } else if (filteredState === TASK_FILTER_INCOMPLETED) {
        setFilteredTasks(
          filterTaskByStatusTitle(tasks, !isCompleted, searchKey)
        );
      } else {
        setFilteredTasks(filterTaskByTitle(tasks, searchKey));
      }
      dispatch(toggleIsFiltering(false));
    }

    filterTasks();
  }, [filteredState, tasks, searchKey]);

  useEffect(() => {
    dispatch(resetVisibleTaskCount());
  }, [filteredState]);

  function showNewTaskCard() {
    setIsNewTaskRequested(true);
  }

  function hideNewTaskCard() {
    setIsNewTaskRequested(false);
  }

  const filteredTaskLength = filteredTasks.length;
  const isTaskEmpty = filteredTaskLength <= 0;
  const paginatedTasks = filteredTasks.slice(0, numOfCardVisible);

  return (
    <div className={`${styles.homeWrapper}`}>
      <div className={`home-container mx-auto`}>
        <h1 className={styles.heading}>Add Tasks</h1>
        <div
          className={`flex flex-col flex-md-row justify-between ${styles.actionBarContainer}`}
        >
          <Button
            onClick={showNewTaskCard}
            className={`fw-500 flex items-center justify-center ${styles.createTaskBtn}`}
          >
            <Image src={ICON_PLUS} alt={ALT_PLUS_ICON_TAG} />
            <span className={styles.createTxt}>Create</span>
          </Button>
          <FilterBtnContainer />
        </div>
        <div className="grid grid-cols-3 grid-cols-md-2 grid-cols-lg-3 card-gap">
          {isNewTaskRequested && (
            <CreateTask
              onSuccessfullTaskEntry={hideNewTaskCard}
              onDeleteClick={hideNewTaskCard}
            />
          )}

          {!isTaskEmpty && <TaskCardContainer tasks={paginatedTasks} />}
        </div>
        {isTaskEmpty ? (
          <NoTaskFound />
        ) : (
          <LoadMoreBtnContainer numOfTotalTask={filteredTaskLength} />
        )}
      </div>
    </div>
  );
}

export default HomeContainer;
