import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
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

function ActionButtonGroup({ isTaskCompleted, onDoneClick, onDeleteClick }) {
  const actionButtons = [
    {
      id: 1,
      styleClass: classnames(styles.doneButton, { hidden: isTaskCompleted }),
      src: ICON_CHECK,
      alt: ALT_TAG_ICON_CHECK,
      onClick: onDoneClick,
    },
    {
      id: 2,
      styleClass: classnames(styles.editButton, { hidden: isTaskCompleted }),
      src: ICON_EDIT,
      alt: ALT_TAG_ICON_EDIT,
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
  isTaskCompleted: PropTypes.bool.isRequired,
  onDoneClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ActionButtonGroup;
