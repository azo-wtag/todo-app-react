import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "components/home-container/index.module.scss";
import Button from "components/base/button";
import CreateTask from "components/task/create-new";
import FilterBtnContainer from "components/filter-btn-container";
import NoTaskFound from "components/not-found/task";
import LoadMoreBtnContainer from "components/load-more-btn-container";
import ExistingTaskCardContaienr from "components/task/existing-task/container";
import { TASK_FILTER_COMPLETED, TASK_FILTER_INCOMPLETED } from "utils/const";
import {
  filterCompletedTask,
  filterInCompletedTask,
  filterTaskByTitle,
} from "utils/helper";

function HomeContainer() {
  const tasks = useSelector((state) => state.todo.tasks);
  const noOfCardVisible = useSelector((state) => state.filter.visibleCardCount);
  const [isNewTaskRequested, setIsNewTaskRequested] = useState(false);

  const filteredState = useSelector((state) => state.filter.filteredCardState);
  const searchedKey = useSelector((state) => state.filter.searchKey);
  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    function filterTasks() {
      if (filteredState === TASK_FILTER_COMPLETED)
        setFilteredTasks(filterCompletedTask(tasks, searchedKey));
      else if (filteredState === TASK_FILTER_INCOMPLETED)
        setFilteredTasks(filterInCompletedTask(tasks, searchedKey));
      else setFilteredTasks(filterTaskByTitle(tasks, searchedKey));
    }

    filterTasks();
  }, [filteredState, tasks, searchedKey]);

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

        {filteredTasks.length > 0 && (
          <ExistingTaskCardContaienr
            tasks={filteredTasks.slice(0, noOfCardVisible)}
          />
        )}
      </div>

      {filteredTasks.length <= 0 ? (
        <NoTaskFound />
      ) : (
        <LoadMoreBtnContainer numOfTotalTask={filteredTasks.length} />
      )}
    </div>
  );
}

export default HomeContainer;
