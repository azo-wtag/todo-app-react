import React from "react";
import propTypes from "prop-types";
import styles from "components/task/existing-task/button-container/index.module.scss";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  ALT_CHECK_ICON_TAG,
  PATH_CHECK_ICON,
  ALT_DELETE_ICON_TAG,
  PATH_DELETE_ICON,
  ALT_EDIT_ICON_TAG,
  PATH_EDIT_ICON,
} from "utils/const";

function ButtonContainer({ onDone, onEdit, onDelete, isTaskCompleted }) {
  return (
    <div className="flex items-center">
      {!isTaskCompleted && (
        <>
          <Button className={styles.doneBtn} onClick={onDone}>
            <Image src={PATH_CHECK_ICON} alt={ALT_CHECK_ICON_TAG} />
          </Button>
          <Button className={styles.editBtn} onClick={onEdit}>
            <Image src={PATH_EDIT_ICON} alt={ALT_EDIT_ICON_TAG} />
          </Button>
        </>
      )}
      <Button className={styles.deleteBtn} onClick={onDelete}>
        <Image src={PATH_DELETE_ICON} alt={ALT_DELETE_ICON_TAG} />
      </Button>
    </div>
  );
}

ButtonContainer.propTypes = {
  onDone: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
  isTaskCompleted: propTypes.bool.isRequired,
};

export default ButtonContainer;
