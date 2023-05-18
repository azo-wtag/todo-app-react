import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "components/common/button";
import TextArea from "components/common/text-area";
import Image from "components/common/image";
import { addTaskToTodo } from "store/actions/todo";
import { generateTaskObject, sanitizer } from "utils/helper";
import { ERROR_MESSAGE_TASK_TITLE } from "utils/const/errorMessages";
import { ATTRIBUTE_TITLE, BUTTON_TYPE_BUTTON } from "utils/const/formElements";
import { ALT_TAG_ICON_DELETE, ICON_DELETE } from "utils/const/images";
import styles from "components/task/create-new/index.module.scss";

function CreateTask({ onSuccessfullTaskEntry }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddTaskSubmit(event) {
    event.preventDefault();
    const title = event.target.title.value;
    const sanitizedTitle = sanitizer(title);
    if (sanitizedTitle === "") {
      setErrorMessage(ERROR_MESSAGE_TASK_TITLE);
      return;
    }
    dispatch(addTaskToTodo(generateTaskObject(sanitizedTitle)));
    onSuccessfullTaskEntry();
  }

  return (
    <form onSubmit={handleAddTaskSubmit}>
      <TextArea
        name={ATTRIBUTE_TITLE}
        errorMessage={errorMessage}
        shouldAutoFocus={true}
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
  onSuccessfullTaskEntry: PropTypes.func.isRequired,
};

export default CreateTask;
