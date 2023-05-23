import React from "react";
import Image from "components/Common/Image";
import styles from "components/not-found/task/index.module.scss";
import {
  ALT_TAG_NO_TASK_FOUND_ICON,
  ICON_NO_TASK_FOUND,
} from "utils/const/images";

function NoTaskFound() {
  return (
    <div className={`flex flex-col items-center ${styles.container}`}>
      <Image src={ICON_NO_TASK_FOUND} alt={ALT_TAG_NO_TASK_FOUND_ICON} />
      <h4 className={styles.heading}>
        You didn’t add any task. Please, add one.
      </h4>
    </div>
  );
}

export default NoTaskFound;
