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
  CUSTOM_ERROR_MESSAGE_TYPE,
  TASK_TITLE_ERROR_MESSAGE,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { editTask, markAsDone } from "store/actions/todo";

function EditTaskForm({ taskId, existingTitle, onDelete, onTaskEdit }) {
  const dispatch = useDispatch();
  useEffect(
    () => setValue(TITLE_FIELD_NAME_ATTRIBUTE, existingTitle),
    [existingTitle]
  );

  function titleSanitizer(title) {
    const sanitizedTitle = DOMPurify.sanitize(title);
    if (sanitizedTitle === "") {
      setError(TITLE_FIELD_NAME_ATTRIBUTE, {
        type: CUSTOM_ERROR_MESSAGE_TYPE,
        message: TASK_TITLE_ERROR_MESSAGE,
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
    onTaskEdit();
  }

  function saveAsDone(task) {
    const title = titleSanitizer(task.title);
    if (title === "") return;
    dispatch(editTask({ taskId, title: title }));
    dispatch(markAsDone(taskId));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    onTaskEdit();
  }

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(taskSchema),
  });

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, []);

  return (
    <form>
      <TextArea
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
      />

      <div className="flex items-center">
        <Button onClick={handleSubmit(updateTask)}>Save</Button>
        <Button onClick={handleSubmit(saveAsDone)}>
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
  onDelete: propTypes.func.isRequired,
  onTaskEdit: propTypes.func.isRequired,
};

export default EditTaskForm;
