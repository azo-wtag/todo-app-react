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

function ButtonContainer({ onDeleteButtonClick }) {
  return (
    <div className="flex items-center">
      <Button className={styles.doneBtn}>
        <Image src={ICON_CHECK} alt={ALT_CHECK_ICON_TAG} />
      </Button>
      <Button className={styles.editBtn}>
        <Image src={ICON_EDIT} alt={ALT_EDIT_ICON_TAG} />
      </Button>
      <Button className={styles.deleteBtn} onClick={onDeleteButtonClick}>
        <Image src={ICON_DELETE} alt={ALT_DELETE_ICON_TAG} />
      </Button>
    </div>
  );
}

ButtonContainer.propTypes = {
  onDeleteButtonClick: propTypes.func.isRequired,
};

export default ButtonContainer;
