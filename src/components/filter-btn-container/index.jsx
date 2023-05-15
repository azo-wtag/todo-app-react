import React from "react";
import Button from "components/base/button";
import { useDispatch } from "react-redux";
import {
  TASK_FILTER_ALL,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";
import { filterTask } from "store/slices/filterSlice";
import styles from "components/filter-btn-container/index.module.scss";

function FilterBtnContainer() {
  const dispatch = useDispatch();

  function handleFilterClick(filterState) {
    return function () {
      dispatch(filterTask(filterState));
    };
  }

  return (
    <div>
      <Button
        onClick={handleFilterClick(TASK_FILTER_ALL)}
        className={`bg-white ${styles.allBtn}`}
      >
        All
      </Button>
      <Button
        onClick={handleFilterClick(TASK_FILTER_INCOMPLETED)}
        className={`bg-white ${styles.incompleteBtn}`}
      >
        Incomplete
      </Button>
      <Button
        onClick={handleFilterClick(TASK_FILTER_COMPLETED)}
        className={`bg-white ${styles.completeBtn}`}
      >
        Complete
      </Button>
    </div>
  );
}

export default FilterBtnContainer;
