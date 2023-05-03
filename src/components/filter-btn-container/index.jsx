import React from "react";
import Button from "components/base/button";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import styles from "components/filter-btn-container/index.module.scss";
import { filterTask } from "store/actions/filter";
import {
  TASK_FILTER_ALL,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";

function FilterBtnContainer() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter.filteredCardState);

  const allBtnClassNames = classnames(
    "bg-white",
    "text-grey-ship",
    styles.allBtn,
    { [styles.selectedBtn]: filterState == TASK_FILTER_ALL }
  );

  const incompleteBtnClassNames = classnames(
    "bg-white",
    "text-grey-ship",
    styles.incompleteBtn,
    { [styles.selectedBtn]: filterState == TASK_FILTER_INCOMPLETED }
  );

  const completeBtnClassNames = classnames(
    "bg-white",
    "text-grey-ship",
    styles.completeBtn,
    { [styles.selectedBtn]: filterState == TASK_FILTER_COMPLETED }
  );

  return (
    <div className={styles.buttonContainer}>
      <Button
        onClick={() => dispatch(filterTask(TASK_FILTER_ALL))}
        className={allBtnClassNames}
      >
        All
      </Button>
      <Button
        onClick={() => dispatch(filterTask(TASK_FILTER_INCOMPLETED))}
        className={incompleteBtnClassNames}
      >
        Incomplete
      </Button>
      <Button
        onClick={() => dispatch(filterTask(TASK_FILTER_COMPLETED))}
        className={completeBtnClassNames}
      >
        Complete
      </Button>
    </div>
  );
}

export default FilterBtnContainer;
