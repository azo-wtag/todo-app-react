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

  return (
    <div>
      <Button
        onClick={() => dispatch(filterTask(TASK_FILTER_ALL))}
        className={`bg-white ${styles.allBtn}`}
      >
        All
      </Button>
      <Button
        onClick={() => dispatch(filterTask(TASK_FILTER_INCOMPLETED))}
        className={`bg-white ${styles.incompleteBtn}`}
      >
        Incomplete
      </Button>
      <Button
        onClick={() => dispatch(filterTask(TASK_FILTER_COMPLETED))}
        className={`bg-white ${styles.completeBtn}`}
      >
        Complete
      </Button>
    </div>
  );
}

export default FilterBtnContainer;
