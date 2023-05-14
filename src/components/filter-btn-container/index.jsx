import React from "react";
import Button from "components/base/button";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import Select from "react-select";
import styles from "components/filter-btn-container/index.module.scss";
import { filterTask } from "store/actions/filter";
import {
  FILTER_OPTIONS,
  TASK_FILTER_ALL,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";

function FilterBtnContainer() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter.filteredCardState);

  function handleFilterClick(filterState) {
    return function () {
      dispatch(filterTask(filterState));
    };
  }

  function handleOptionChange(selectedFilterState) {
    dispatch(filterTask(selectedFilterState.value));
  }

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

  const filterStates = [
    { id: TASK_FILTER_ALL, label: "All", styleClass: allBtnClassNames },
    {
      id: TASK_FILTER_INCOMPLETED,
      label: "Incomplete",
      styleClass: incompleteBtnClassNames,
    },
    {
      id: TASK_FILTER_COMPLETED,
      label: "Complete",
      styleClass: completeBtnClassNames,
    },
  ];

  return (
    <>
      <div className={styles.buttonContainer}>
        {filterStates.map((filterState) => (
          <Button
            key={filterState.id}
            onClick={handleFilterClick(filterState.id)}
            className={filterState.styleClass}
          >
            {filterState.label}
          </Button>
        ))}
      </div>
      <div className={styles.selectBoxContainer}>
        <Select
          value={FILTER_OPTIONS[filterState - 1]}
          options={FILTER_OPTIONS}
          onChange={handleOptionChange}
        />
      </div>
    </>
  );
}

export default FilterBtnContainer;
