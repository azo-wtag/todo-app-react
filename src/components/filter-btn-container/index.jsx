import React from "react";
import Button from "components/base/button";
import { useDispatch } from "react-redux";
import {
  TASK_FILTER_ALL,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";
import { filterTask } from "store/slices/filterSlice";

function FilterBtnContainer() {
  const dispatch = useDispatch();

  function handleFilterClick(filterState) {
    return function () {
      dispatch(filterTask(filterState));
    };
  }

  return (
    <div>
      <Button onClick={handleFilterClick(TASK_FILTER_ALL)}>All</Button>
      <Button onClick={handleFilterClick(TASK_FILTER_INCOMPLETED)}>
        Incomplete
      </Button>
      <Button onClick={handleFilterClick(TASK_FILTER_COMPLETED)}>
        Complete
      </Button>
    </div>
  );
}

export default FilterBtnContainer;
