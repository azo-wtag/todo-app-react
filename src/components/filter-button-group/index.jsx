import React from "react";
import Button from "components/common/button";
import {
  TASK_FILTER_ALL,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const/tasks";

function FilterButtonGroup() {
  const filterButtons = [
    { id: TASK_FILTER_ALL, label: "All" },
    { id: TASK_FILTER_INCOMPLETED, label: "InComplete" },
    { id: TASK_FILTER_COMPLETED, label: "Complete" },
  ];

  return (
    <div>
      {filterButtons.map((filterButton) => (
        <Button key={filterButton.id}>{filterButton.label}</Button>
      ))}
    </div>
  );
}

export default FilterButtonGroup;
