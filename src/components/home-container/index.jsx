import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "components/home-container/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import FilterBtnContainer from "components/filter-btn-container";
import NoTaskFound from "components/not-found/task";
import LoadMoreBtnContainer from "components/load-more-btn-container";
import ExistingTaskCardContaienr from "components/task/existing-task/container";
import Image from "components/base/image";
import {
  PLUS_ICON_ALT_TAG,
  PLUS_ICON_PATH,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";
import {
  filterCompletedTask,
  filterInCompletedTask,
  filterTaskByTitle,
} from "utils/helper";
import { resetVisibleTaskCount, toggleIsFiltering } from "store/actions/filter";

function HomeContainer() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);
  const numOfCardVisible = useSelector(
    (state) => state.filter.visibleCardCount
  );
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  const filteredState = useSelector((state) => state.filter.filteredCardState);
  const searchedKey = useSelector((state) => state.filter.searchKey);
  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    function filterTasks() {
      dispatch(toggleIsFiltering(true));
      if (filteredState === TASK_FILTER_COMPLETED)
        setFilteredTasks(filterCompletedTask(tasks, searchedKey));
      else if (filteredState === TASK_FILTER_INCOMPLETED)
        setFilteredTasks(filterInCompletedTask(tasks, searchedKey));
      else setFilteredTasks(filterTaskByTitle(tasks, searchedKey));
      dispatch(toggleIsFiltering(false));
    }

    filterTasks();
  }, [filteredState, tasks, searchedKey]);

  useEffect(() => {
    dispatch(resetVisibleTaskCount());
  }, [filteredState]);

  const isTaskEmpty = filteredTasks.length <= 0;
  return (
    <div className={`${styles.homeWrapper}`}>
      <div className={`home-container mx-auto`}>
        <h1 className={styles.heading}>Add Tasks</h1>
        <div className={`flex justify-between ${styles.actionBarContainer}`}>
          <Button
            onClick={() => setIsNewTaskRequested(true)}
            className={`fw-500 flex items-center justify-center ${styles.createTaskBtn}`}
          >
            <Image src={PLUS_ICON_PATH} alt={PLUS_ICON_ALT_TAG} />
            <span className={styles.createTxt}>Create</span>
          </Button>
          <FilterBtnContainer />
        </div>
        <div className="grid grid-cols-3 grid-cols-sm-2 grid-cols-lg-3 card-gap">
          {isNewTaskRequested && (
            <CreateTask
              onSuccessfullTaskEntry={() => setIsNewTaskRequested(false)}
              onDeleteBtnClick={() => setIsNewTaskRequested(false)}
            />
          )}

          {!isTaskEmpty && (
            <ExistingTaskCardContaienr
              tasks={filteredTasks.slice(0, numOfCardVisible)}
            />
          )}
        </div>
        {isTaskEmpty ? (
          <NoTaskFound />
        ) : (
          <LoadMoreBtnContainer numOfTotalTask={filteredTasks.length} />
        )}
      </div>
    </div>
  );
}

export default HomeContainer;
