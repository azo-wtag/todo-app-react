import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  TYPE_BUTTON,
  TITLE_FIELD_NAME_ATTRIBUTE,
  ICON_CHECK,
  ALT_CHECK_ICON_TAG,
  ICON_DELETE,
  ALT_DELETE_ICON_TAG,
  ERROR_MESSAGE_CUSTOM_TYPE,
  ERROR_MESSAGE_TASK_TITLE,
  SUCCESS_MESSAGE_TASK_UPDATED,
  SUCCESS_MESSAGE_EDITED_TASK_DONE,
  FORM_VALIDATION_MODE_ONCHANGE,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { editTask, markAsDone } from "store/actions/todo";
import { showErrorToast, showSuccessToast } from "utils/toast";

function EditTaskForm({ taskId, existingTitle, onDelete, onTaskEdit }) {
  const dispatch = useDispatch();

  function titleSanitizer(title) {
    const sanitizedTitle = DOMPurify.sanitize(title);
    if (sanitizedTitle === "") {
      setError(TITLE_FIELD_NAME_ATTRIBUTE, {
        type: ERROR_MESSAGE_CUSTOM_TYPE,
        message: ERROR_MESSAGE_TASK_TITLE,
      });
      setValue(TITLE_FIELD_NAME_ATTRIBUTE, sanitizedTitle);
    }

    return sanitizedTitle;
  }

  function updateTask(task) {
    const title = titleSanitizer(task.title);
    if (title === "") return;
    dispatch(editTask({ taskId, title: title }));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    showSuccessToast(SUCCESS_MESSAGE_TASK_UPDATED);
    onTaskEdit();
  }

  function saveAsDone(task) {
    const title = titleSanitizer(task.title);
    if (title === "") return;
    dispatch(editTask({ taskId, title: title }));
    dispatch(markAsDone(taskId));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    showSuccessToast(SUCCESS_MESSAGE_EDITED_TASK_DONE);
    onTaskEdit();
  }

  const onValidationError = (errors) => {
    showErrorToast(errors.title.message);
  };

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    setError,
    formState: { errors },
  } = useForm({
    mode: FORM_VALIDATION_MODE_ONCHANGE,
    resolver: yupResolver(taskSchema),
  });

  function handleEditTask(e) {
    handleSubmit(updateTask, onValidationError)(e);
  }

  function handleSaveTask(e) {
    handleSubmit(saveAsDone, onValidationError)(e);
  }

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, existingTitle);
  }, []);

  return (
    <form>
      <TextArea
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
      />

      <div className="flex items-center">
        <Button onClick={handleEditTask}>Save</Button>
        <Button onClick={handleSaveTask}>
          <Image src={ICON_CHECK} alt={ALT_CHECK_ICON_TAG} />
        </Button>
        <Button buttonType={TYPE_BUTTON} onClick={onDelete}>
          <Image src={ICON_DELETE} alt={ALT_DELETE_ICON_TAG} />
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
