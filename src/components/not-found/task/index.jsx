import React from "react";
import Image from "components/base/image";
import styles from "components/not-found/task/index.module.scss";
import {
  ALT_NO_TASK_FOUND_ICON_TAG,
  ICON_NO_TASK_FOUND,
  TASK_FILTER_COMPLETED,
} from "utils/const";
import { useSelector } from "react-redux";

function NoTaskFound() {
  const filterState = useSelector((state) => state.filter.filteredCardState);

  let taskState = "add";

  if (filterState === TASK_FILTER_COMPLETED) {
    taskState = "complete";
  }

  return (
    <div className={`flex flex-col items-center ${styles.container}`}>
      <Image src={ICON_NO_TASK_FOUND} alt={ALT_NO_TASK_FOUND_ICON_TAG} />
      <h4 className={styles.heading}>
        You didn’t {taskState} any task. Please, {taskState} one.
      </h4>
    </div>
  );
}

export default NoTaskFound;
