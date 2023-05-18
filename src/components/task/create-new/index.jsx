import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import Button from "components/base/button";
import TextArea from "components/base/text-area";
import Image from "components/base/image";
import { addTaskToTodo } from "store/actions/todo";
import {
  ALT_TAG_ICON_DELETE,
  ATTRIBUTE_TITLE,
  ERROR_MESSAGE_TASK_TITLE,
  ICON_DELETE,
  TYPE_BUTTON,
} from "utils/const";
import { generateTaskObject, parseForm } from "utils/helper";
import styles from "components/task/create-new/index.module.scss";

function CreateTask({ onSuccessfullTaskEntry }) {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  function handleAddTaskSubmit(event) {
    event.preventDefault();
    const formData = parseForm(event.target);
    console.log(formData);
    const sanitizedTitle = DOMPurify.sanitize(formData.title);
    if (sanitizedTitle === "") {
      setErrorMessage(ERROR_MESSAGE_TASK_TITLE);
      //taskInputRef.current.focus();
      return;
    }
    dispatch(addTaskToTodo(generateTaskObject(sanitizedTitle)));
    // taskInputRef.current.value = "";
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
        <Button buttonType={TYPE_BUTTON}>
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
