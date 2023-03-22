import React from "react";
import propTypes from "prop-types";

import styles from "./index.module.scss";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  CHECK_ICON_ALT_TAG,
  DELETE_ICON_ALT_TAG,
  EDIT_ICON_ALT_TAG,
} from "utils/const/images";

function ButtonContainer({ onEditButtonClick }) {
  return (
    <div className="flex items-center">
      <Button className={`${styles.button} ${styles.doneBtn}`}>
        <Image src="check.png" alt={CHECK_ICON_ALT_TAG} />
      </Button>
      <Button
        className={`${styles.button} ${styles.editBtn}`}
        onButtonClick={onEditButtonClick}
      >
        <Image src="edit.png" alt={EDIT_ICON_ALT_TAG} />
      </Button>
      <Button className={`${styles.button} ${styles.deleteBtn}`}>
        <Image src="delete.png" alt={DELETE_ICON_ALT_TAG} />
      </Button>
    </div>
  );
}

ButtonContainer.propTypes = {
  ButtonContainer: propTypes.func,
};

ButtonContainer.defaultProps = { ButtonContainer: () => {} };

export default ButtonContainer;
