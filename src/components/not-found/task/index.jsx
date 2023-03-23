import React from "react";
import Image from "../../base/image";

import styles from "./index.module.scss";

function NoTaskFound() {
  return (
    <div className={`flex flex-col items-center ${styles.container}`}>
      <Image src="no-task-found.png" alt="No task found" />
      <h4 className={styles.heading}>
        You didn’t add any task. Please, add one.
      </h4>
    </div>
  );
}

export default NoTaskFound;
