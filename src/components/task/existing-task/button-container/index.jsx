import React from "react";
import propTypes from "prop-types";

import styles from "./index.module.scss";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  CHECK_ICON_ALT_TAG,
  CHECK_ICON_PATH,
  DELETE_ICON_ALT_TAG,
  DELETE_ICON_PATH,
  EDIT_ICON_ALT_TAG,
  EDIT_ICON_PATH,
} from "utils/const";

function ButtonContainer({
  onDoneButtonClick,
  onEditButtonClick,
  onDeleteButtonClick,
  isTaskCompleted,
}) {
  return (
    <div className="flex items-center">
      {!isTaskCompleted && (
        <>
          <Button
            className={`${styles.button} ${styles.doneBtn}`}
            onButtonClick={onDoneButtonClick}
          >
            <Image src={CHECK_ICON_PATH} alt={CHECK_ICON_ALT_TAG} />
          </Button>
          <Button
            className={`${styles.button} ${styles.editBtn}`}
            onButtonClick={onEditButtonClick}
          >
            <Image src={EDIT_ICON_PATH} alt={EDIT_ICON_ALT_TAG} />
          </Button>
        </>
      )}
      <Button
        className={`${styles.button} ${styles.deleteBtn}`}
        onButtonClick={onDeleteButtonClick}
      >
        <Image src={DELETE_ICON_PATH} alt={DELETE_ICON_ALT_TAG} />
      </Button>
    </div>
  );
}

ButtonContainer.propTypes = {
  onDoneButtonClick: propTypes.func.isRequired,
  onDeleteButtonClick: propTypes.func.isRequired,
  isTaskCompleted: propTypes.bool.isRequired,
};

export default ButtonContainer;