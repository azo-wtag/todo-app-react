import React, { useState } from "react";
import propTypes from "prop-types";
import dayjs from "dayjs";

import styles from "./index.module.scss";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import Image from "components/base/image";

function TaskCard({
  title,
  createdAt,
  isCompleted,
  completedAt,
  isTaskOnEditMode,
}) {
  const [isTextAreaVisible, setIsTextAreaVisible] = useState(isTaskOnEditMode);

  const calculateDateDifference = (startDate, endDate = dayjs()) =>
    endDate.diff(startDate, "day");
  const formatDate = (date) => dayjs(date, "YYYY-MM-DD").format("YYYY-MM-DD");

  return (
    <div className={styles.card}>
      {isTextAreaVisible ? <TextArea numOfRows={5} /> : <h3>{title}</h3>}

      <p className={styles.date}>created At: {formatDate(createdAt)}</p>

      <div className="flex justify-between">
        <div className="flex items-center">
          <Button className={`${styles.button} ${styles.doneBtn}`}>
            <Image src="check.png" alt="check" />
          </Button>

          <Button
            className={`${styles.button} ${styles.editBtn}`}
            onButtonClick={() => setIsTextAreaVisible(true)}
          >
            <Image src="edit.png" alt="check" />
          </Button>

          <Button className={`${styles.button} ${styles.deleteBtn}`}>
            <Image src="delete.png" alt="check" />
          </Button>
        </div>

        {isCompleted && (
          <Button>
            Completed in {calculateDateDifference(completedAt, dayjs())} days
          </Button>
        )}
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
