import React from "react";
import propTypes from "prop-types";
import Button from "components/Common/Button";
import Image from "components/Common/Image";
import {
  ALT_TAG_ICON_CHECK,
  ALT_TAG_ICON_DELETE,
  ALT_TAG_ICON_EDIT,
  ICON_CHECK,
  ICON_DELETE,
  ICON_EDIT,
} from "utils/const/images";
import styles from "components/ActionButtonGroup/index.module.scss";

function ActionButtonGroup({ onDeleteClick }) {
  const actionButtons = [
    {
      id: 1,
      styleClass: styles.doneButton,
      src: ICON_CHECK,
      alt: ALT_TAG_ICON_CHECK,
      onClick: () => {},
    },
    {
      id: 2,
      styleClass: styles.editButton,
      src: ICON_EDIT,
      alt: ALT_TAG_ICON_EDIT,
      onClick: () => {},
    },
    {
      id: 3,
      styleClass: styles.deleteButton,
      src: ICON_DELETE,
      alt: ALT_TAG_ICON_DELETE,
      onClick: onDeleteClick,
    },
  ];

  return (
    <div className={`flex items-center ${styles.actionButtons}`}>
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

ActionButtonGroup.propTypes = {
  onDeleteClick: propTypes.func.isRequired,
};

export default ActionButtonGroup;
