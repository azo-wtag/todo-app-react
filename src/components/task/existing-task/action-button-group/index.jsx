import React from "react";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  ALT_TAG_ICON_CHECK,
  ALT_TAG_ICON_DELETE,
  ALT_TAG_ICON_EDIT,
  ICON_CHECK,
  ICON_DELETE,
  ICON_EDIT,
} from "utils/const/images";
import styles from "components/task/existing-task/action-button-group/index.module.scss";

function ActionButtonGroup() {
  const actionButtons = [
    {
      id: 1,
      styleClass: styles.doneBtn,
      src: ICON_CHECK,
      alt: ALT_TAG_ICON_CHECK,
    },
    {
      id: 2,
      styleClass: styles.editBtn,
      src: ICON_EDIT,
      alt: ALT_TAG_ICON_EDIT,
    },
    {
      id: 3,
      styleClass: styles.deleteBtn,
      src: ICON_DELETE,
      alt: ALT_TAG_ICON_DELETE,
    },
  ];

  return (
    <div className="flex items-center">
      {actionButtons.map((actionButton) => (
        <Button key={actionButton.id} className={actionButton.styleClass}>
          <Image src={actionButton.src} alt={actionButton.alt} />
        </Button>
      ))}
    </div>
  );
}

export default ActionButtonGroup;
