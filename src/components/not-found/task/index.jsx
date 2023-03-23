import React from "react";
import Image from "components/base/image";

import styles from "components/not-found/task/index.module.scss";
import {
  NO_TASK_FOUND_ICON_ALT_TAG,
  NO_TASK_FOUND_ICON_PATH,
} from "utils/const";

function NoTaskFound() {
  return (
    <div className={`flex flex-col items-center ${styles.container}`}>
      <Image src={NO_TASK_FOUND_ICON_PATH} alt={NO_TASK_FOUND_ICON_ALT_TAG} />
      <h4 className={styles.heading}>
        You didn’t add any task. Please, add one.
      </h4>
    </div>
  );
}

export default NoTaskFound;
