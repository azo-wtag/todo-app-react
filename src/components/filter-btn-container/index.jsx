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

  return (
    <div>
      <Button onClick={() => dispatch(filterTask(TASK_FILTER_ALL))}>All</Button>
      <Button onClick={() => dispatch(filterTask(TASK_FILTER_INCOMPLETED))}>
        Incomplete
      </Button>
      <Button onClick={() => dispatch(filterTask(TASK_FILTER_COMPLETED))}>
        Complete
      </Button>
    </div>
  );
}

export default FilterBtnContainer;
