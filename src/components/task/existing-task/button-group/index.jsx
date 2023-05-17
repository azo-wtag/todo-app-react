import React from "react";
import { v4 as uuidv4 } from "uuid";
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

function ButtonGroup({ onDeleteClick }) {
  const actionButtons = [
    {
      id: uuidv4(),
      styleClass: styles.doneBtn,
      src: ICON_CHECK,
      alt: ALT_TAG_ICON_CHECK,
      onClick: () => {},
    },
    {
      id: uuidv4(),
      styleClass: styles.editBtn,
      src: ICON_EDIT,
      alt: ALT_TAG_ICON_EDIT,
      onClick: () => {},
    },
    {
      id: uuidv4(),
      styleClass: styles.deleteBtn,
      src: ICON_DELETE,
      alt: ALT_TAG_ICON_DELETE,
      onClick: onDeleteClick,
    },
  ];

  return (
    <div className="flex items-center">
      {actionButtons.map((actionButton) => (
        <Button
          key={actionButton.id}
          className={actionButton.styleClass}
          onClick={actionButton.onClick}
        >
          <Image src={actionButton.src} alt={actionButton.alt} />
        </Button>
      ))}
    </div>
  );
}

ButtonGroup.propTypes = {
  onDeleteClick: propTypes.func.isRequired,
};

export default ButtonGroup;
