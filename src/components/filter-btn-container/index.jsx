import React from "react";
import Button from "components/base/button";
import { useDispatch } from "react-redux";
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
      <Button onClick={handleAllClick}>All</Button>
      <Button onClick={handleInCompleteClick}>Incomplete</Button>
      <Button onClick={handleCompleteClick}>Complete</Button>
    </div>
  );
}

export default FilterBtnContainer;
