import React from "react";
import Button from "components/base/button";
import { useDispatch } from "react-redux";
import styles from "components/filter-btn-container/index.module.scss";
import { filterTask } from "store/actions/filter";
import {
  TASK_FILTER_ALL,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";

function FilterBtnContainer() {
  const dispatch = useDispatch();

  function handleAllClick() {
    dispatch(filterTask(TASK_FILTER_ALL));
  }

  function handleInCompleteClick() {
    dispatch(filterTask(TASK_FILTER_INCOMPLETED));
  }

  function handleCompleteClick() {
    dispatch(filterTask(TASK_FILTER_COMPLETED));
  }

  return (
    <div>
      <Button onClick={handleAllClick} className={`bg-white ${styles.allBtn}`}>
        All
      </Button>
      <Button
        onClick={handleInCompleteClick}
        className={`bg-white ${styles.incompleteBtn}`}
      >
        Incomplete
      </Button>
      <Button
        onClick={handleCompleteClick}
        className={`bg-white ${styles.completeBtn}`}
      >
        Complete
      </Button>
    </div>
  );
}

export default FilterBtnContainer;
