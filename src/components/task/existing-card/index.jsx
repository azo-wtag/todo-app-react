import React, { useState } from "react";
import propTypes from "prop-types";
import dayjs from "dayjs";

import styles from "components/task/existing-card/index.module.scss";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import Image from "components/base/image";
import { TASK_TEXTAREA_NUM_OF_ROW } from "utils/const";
import {
  CHECK_ICON_ALT_TAG,
  DELETE_ICON_ALT_TAG,
  EDIT_ICON_ALT_TAG,
} from "utils/const/images";

function TaskCard({ title, createdAt, isCompleted, isTaskOnEditMode }) {
  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);

  const formatDate = (date) => dayjs(date, "YYYY-MM-DD").format("YYYY-MM-DD");

  return (
    <div className={styles.card}>
      {isTextAreaVisible ? (
        <TextArea numOfRows={TASK_TEXTAREA_NUM_OF_ROW} />
      ) : (
        <h3>{title}</h3>
      )}

      <p className={styles.date}>created At: {formatDate(createdAt)}</p>

      <div className="flex justify-between">
        <div className="flex items-center">
          <Button className={`${styles.button} ${styles.doneBtn}`}>
            <Image src="check.png" alt={CHECK_ICON_ALT_TAG} />
          </Button>

          <Button
            className={`${styles.button} ${styles.editBtn}`}
            onButtonClick={() => setIsTextAreaVisible(true)}
          >
            <Image src="edit.png" alt={EDIT_ICON_ALT_TAG} />
          </Button>

          <Button className={`${styles.button} ${styles.deleteBtn}`}>
            <Image src="delete.png" alt={DELETE_ICON_ALT_TAG} />
          </Button>
        </div>

        {isCompleted && <Button>Completed in days</Button>}
      </div>
    </div>
  );
}

function validateDate(props, propName, componentName) {
  const dateValue = props[propName];
  if (!dayjs(dateValue).isValid()) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ` +
        `Expected a valid date'.`
    );
  }
}

TaskCard.propTypes = {
  title: propTypes.string.isRequired,
  createdAt: validateDate,
  isCompleted: propTypes.bool.isRequired,
  isTaskOnEditMode: propTypes.bool,
};

TaskCard.defaultProps = {
  isTaskOnEditMode: false,
};

export default TaskCard;
