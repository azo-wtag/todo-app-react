import React from "react";
import Image from "components/Common/Image";
import {
  ALT_TAG_ICON_NO_TASK_FOUND,
  ICON_NO_TASK_FOUND,
} from "utils/const/images";
import styles from "components/NoTaskFound/index.module.scss";

function NoTaskFound() {
  return (
    <div className={`flex flex-col items-center ${styles.container}`}>
      <Image src={ICON_NO_TASK_FOUND} alt={ALT_TAG_ICON_NO_TASK_FOUND} />
      <h4 className={styles.heading}>
        You didn’t add any task. Please, add one.
      </h4>
    </div>
  );
}

export default NoTaskFound;
