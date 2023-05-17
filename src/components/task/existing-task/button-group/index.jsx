import React from "react";
import propTypes from "prop-types";
import styles from "components/task/existing-task/button-group/index.module.scss";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  ALT_TAG_ICON_CHECK,
  ALT_TAG_ICON_DELETE,
  ALT_TAG_ICON_EDIT,
  ICON_CHECK,
  ICON_DELETE,
  ICON_EDIT,
} from "utils/const";

function ButtonGroup({ isTaskCompleted, onDoneClick, onDeleteClick }) {
  return (
    <div className="flex items-center">
      {!isTaskCompleted && (
        <>
          <Button className={styles.doneBtn} onClick={onDoneClick}>
            <Image src={ICON_CHECK} alt={ALT_TAG_ICON_CHECK} />
          </Button>
          <Button className={styles.editBtn}>
            <Image src={ICON_EDIT} alt={ALT_TAG_ICON_EDIT} />
          </Button>
        </>
      )}
      <Button className={styles.deleteBtn} onClick={onDeleteClick}>
        <Image src={ICON_DELETE} alt={ALT_TAG_ICON_DELETE} />
      </Button>
    </div>
  );
}

ButtonGroup.propTypes = {
  isTaskCompleted: propTypes.bool.isRequired,
  onDoneClick: propTypes.func.isRequired,
  onDeleteClick: propTypes.func.isRequired,
};

export default ButtonGroup;
