import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "components/Common/Button";
import TextArea from "components/Common/TextArea";
import Image from "components/Common/Image";
import { sanitizer } from "utils/helper";
import { ERROR_MESSAGE_TASK_TITLE } from "utils/const/error-messages";
import { ATTRIBUTE_TITLE, BUTTON_TYPE_BUTTON } from "utils/const/form-elements";
import { ALT_TAG_ICON_DELETE, ICON_DELETE } from "utils/const/images";
import styles from "components/Task/CreateNew/index.module.scss";

function CreateTask({ onAddTask }) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddTaskSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const sanitizedTitle = sanitizer(title);
    if (sanitizedTitle === "") {
      setErrorMessage(ERROR_MESSAGE_TASK_TITLE);
      return;
    }
    onAddTask(sanitizedTitle);
  }

  return (
    <form onSubmit={handleAddTaskSubmit}>
      <TextArea
        name={ATTRIBUTE_TITLE}
        errorMessage={errorMessage}
        autoFocus={true}
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
