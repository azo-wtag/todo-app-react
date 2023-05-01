import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  TASK_TEXTAREA_NUM_OF_ROW,
  TYPE_BUTTON,
  TITLE_FIELD_NAME_ATTRIBUTE,
  PATH_CHECK_ICON,
  ALT_CHECK_ICON_TAG,
  PATH_DELETE_ICON,
  ALT_DELETE_ICON_TAG,
  TASK_SANITIZE_REGEX_PATTERN,
  ERROR_MESSAGE_CUSTOM_TYPE,
  ERROR_MESSAGE_TASK_TITLE,
  SUCCESS_MESSAGE_TASK_UPDATED,
  SUCCESS_MESSAGE_EDITED_TASK_DONE,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { editTask, markAsDone } from "store/actions/todo";
import styles from "components/task/existing-task/edit-task/index.module.scss";
import Loader from "components/base/loader";
import { showErrorToast, showSuccessToast } from "utils/toast";

function EditTaskForm({ taskId, existingTitle, onDelete, onTaskEdit }) {
  const dispath = useDispatch();
  useEffect(
    () => setValue(TITLE_FIELD_NAME_ATTRIBUTE, existingTitle),
    [existingTitle]
  );

  const [isTaskUpdating, setIsTaskUpdating] = useState(false);

  const titleSanitizer = (title) => {
    const sanitizedTitle = title
      .replace(TASK_SANITIZE_REGEX_PATTERN, "")
      .trim();
    if (sanitizedTitle === "") {
      setError(TITLE_FIELD_NAME_ATTRIBUTE, {
        type: ERROR_MESSAGE_CUSTOM_TYPE,
        message: ERROR_MESSAGE_TASK_TITLE,
      });
      setValue(TITLE_FIELD_NAME_ATTRIBUTE, sanitizedTitle);
    }

    return sanitizedTitle;
  };

  const updateTask = async (task) => {
    const title = titleSanitizer(task.title);
    if (title === "") return;
    await dispath(editTask({ taskId, title: title }));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    showSuccessToast(SUCCESS_MESSAGE_TASK_UPDATED);
    onTaskEdit();
    setIsTaskUpdating(false);
  };

  const saveAsDone = async (task) => {
    const title = titleSanitizer(task.title);
    if (title === "") return;
    setIsTaskUpdating(true);
    await dispath(editTask({ taskId, title: title }));
    await dispath(markAsDone(taskId));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    showSuccessToast(SUCCESS_MESSAGE_EDITED_TASK_DONE);
    onTaskEdit();
    setIsTaskUpdating(false);
  };

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
    mode: "onChange",
    resolver: yupResolver(taskSchema),
  });

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, [setFocus]);

  if (isTaskUpdating)
    return (
      <div className="relative width-full height-full">
        <Loader imageClassName={styles.loaderImage} />
      </div>
    );

  return (
    <form>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
        className={`fw-500 ${styles.textArea}`}
      />

      <div className={`flex items-center ${styles.btnContainer}`}>
        <Button
          onClick={handleSubmit(updateTask, onValidationError)}
          className={`bg-white ${styles.saveBtn}`}
        >
          Save
        </Button>
        <Button
          onClick={handleSubmit(saveAsDone, onValidationError)}
          className={`bg-white ${styles.doneBtn}`}
        >
          <Image src={PATH_CHECK_ICON} alt={ALT_CHECK_ICON_TAG} />
        </Button>
        <Button
          buttonType={TYPE_BUTTON}
          onClick={onDelete}
          className="bg-white"
        >
          <Image src={PATH_DELETE_ICON} alt={ALT_DELETE_ICON_TAG} />
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
