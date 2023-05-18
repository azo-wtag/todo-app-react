import React, { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  TYPE_BUTTON,
  ICON_CHECK,
  ICON_DELETE,
  ALT_TAG_ICON_DELETE,
  ALT_TAG_ICON_CHECK,
  ERROR_MESSAGE_TASK_TITLE,
  ATTRIBUTE_TITLE,
} from "utils/const";
import { editTask, markAsDone } from "store/actions/todo";

function EditTaskForm({ taskId, existingTitle, onDelete, onTaskEdit }) {
  const dispatch = useDispatch();
  const taskInputRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");

  function titleSanitizer(title) {
    const sanitizedTitle = DOMPurify.sanitize(title);
    if (sanitizedTitle === "") {
      setErrorMsg(ERROR_MESSAGE_TASK_TITLE);
      taskInputRef.current.value = sanitizedTitle;
    }

    return sanitizedTitle;
  }

  function updateTask(event) {
    event.preventDefault();
    const title = titleSanitizer(taskInputRef.current.value);
    if (title === "") return;
    dispatch(editTask({ taskId, title: title }));
    taskInputRef.current.value = null;
    onTaskEdit();
  }

  function saveAsDone(event) {
    event.preventDefault();
    const title = titleSanitizer(taskInputRef.current.value);
    if (title === "") return;
    dispatch(editTask({ taskId, title: title }));
    dispatch(markAsDone(taskId));
    taskInputRef.current.value = null;
    onTaskEdit();
  }

  useEffect(() => {
    taskInputRef.current.focus();
    taskInputRef.current.value = existingTitle;
  }, []);

  return (
    <form>
      <TextArea ref={taskInputRef} name={ATTRIBUTE_TITLE} errorMsg={errorMsg} />
      <div className="flex items-center">
        <Button onClick={updateTask}>Save</Button>
        <Button onClick={saveAsDone}>
          <Image src={ICON_CHECK} alt={ALT_TAG_ICON_CHECK} />
        </Button>
        <Button buttonType={TYPE_BUTTON} onClick={onDelete}>
          <Image src={ICON_DELETE} alt={ALT_TAG_ICON_DELETE} />
        </Button>
      </div>
    </form>
  );
}

EditTaskForm.propTypes = {
  taskId: propTypes.string.isRequired,
  existingTitle: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onTaskEdit: propTypes.func.isRequired,
};

export default EditTaskForm;
