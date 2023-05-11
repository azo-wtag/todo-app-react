import React from "react";
import propTypes from "prop-types";
import styles from "components/task/existing-task/button-container/index.module.scss";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  ALT_CHECK_ICON_TAG,
  ICON_CHECK,
  ALT_DELETE_ICON_TAG,
  ICON_DELETE,
  ALT_EDIT_ICON_TAG,
  ICON_EDIT,
} from "utils/const";

function ButtonContainer({
  isTaskCompleted,
  onDoneClick,
  onDeleteClick,
  onEditClick,
}) {
  return (
    <div className="flex items-center">
      {!isTaskCompleted && (
        <>
          <Button className={styles.doneBtn} onClick={onDoneClick}>
            <Image src={ICON_CHECK} alt={ALT_CHECK_ICON_TAG} />
          </Button>
          <Button className={styles.editBtn} onClick={onEditClick}>
            <Image src={ICON_EDIT} alt={ALT_EDIT_ICON_TAG} />
          </Button>
        </>
      )}
      <Button className={styles.deleteBtn} onClick={onDeleteClick}>
        <Image src={ICON_DELETE} alt={ALT_DELETE_ICON_TAG} />
      </Button>
    </div>
  );
}

ButtonContainer.propTypes = {
  isTaskCompleted: propTypes.bool.isRequired,
  onDoneClick: propTypes.func.isRequired,
  onDeleteClick: propTypes.func.isRequired,
  onEditClick: propTypes.func.isRequired,
};

export default ButtonContainer;
