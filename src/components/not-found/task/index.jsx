import React from "react";
import Image from "components/base/image";

import styles from "components/not-found/task/index.module.scss";
import {
  ALT_NO_TASK_FOUND_ICON_TAG,
  PATH_NO_TASK_FOUND_ICON,
} from "utils/const";

function NoTaskFound() {
  return (
    <div className={`flex flex-col items-center ${styles.container}`}>
      <Image src={PATH_NO_TASK_FOUND_ICON} alt={ALT_NO_TASK_FOUND_ICON_TAG} />
      <h4 className={styles.heading}>
        You didn’t add any task. Please, add one.
      </h4>
    </div>
  );
}

export default NoTaskFound;
