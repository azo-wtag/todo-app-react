import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/Commons/Buttons";
import TextArea from "components/Commons/TextArea";
import Image from "components/Commons/Images";
import { taskSanitizer } from "utils/helper";
import { VALIDATION_ERROR_TASK_TITLE } from "utils/const/error-messages";
import { ATTRIBUTE_TITLE, BUTTON_TYPE_BUTTON } from "utils/const/form-elements";
import { ALT_TAG_ICON_DELETE, ICON_DELETE } from "utils/const/images";
import styles from "components/Task/CreateNew/index.module.scss";

function CreateTask({ onAddTask }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(true);

  function handleAddTaskSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const sanitizedTitle = taskSanitizer(title);
    if (sanitizedTitle === "") {
      setErrorMessage(VALIDATION_ERROR_TASK_TITLE);
      setIsTextAreaFocused(true);
      return;
    }
    setIsTextAreaFocused(false);
    onAddTask(sanitizedTitle);
  }

  return (
    <form onSubmit={handleAddTaskSubmit}>
      <TextArea
        name={ATTRIBUTE_TITLE}
        errorMessage={errorMessage}
        autoFocus={isTextAreaFocused}
      />
      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={styles.addTaskBtn}>Add Task</Button>
        <Button buttonType={BUTTON_TYPE_BUTTON}>
          <Image src={ICON_DELETE} alt={ALT_TAG_ICON_DELETE} />
        </Button>
      </div>
    </form>
  );
}

CreateTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default CreateTask;
