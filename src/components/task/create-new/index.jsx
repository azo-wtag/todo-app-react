import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import styles from "components/task/create-new/index.module.scss";
import Button from "components/base/button";
import TextArea from "components/base/text-area";
import Image from "components/base/image";
import {
  TASK_TEXTAREA_NUM_OF_ROW,
  ALT_DELETE_ICON_TAG,
  PATH_DELETE_ICON,
  TITLE_FIELD_NAME_ATTRIBUTE,
  ERROR_MESSAGE_CUSTOM_TYPE,
  ERROR_MESSAGE_TASK_TITLE,
  TYPE_BUTTON,
  FORM_VALIDATION_MODE_ONCHANGE,
  SUCCESS_MESSAGE_TASK_ADDED,
  TASK_SANITIZE_REGEX_PATTERN,
  TASK_FILTER_ALL,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { generateTaskObject } from "utils/helper";
import { addTask } from "store/actions/todo";
import {
  filterTask,
  resetVisibleTaskCount,
  setSearchKey,
} from "store/actions/filter";
import { showErrorToast, showSuccessToast } from "utils/toast";

function CreateTask({ onSuccessfullTaskEntry, onDelete }) {
  const dispatch = useDispatch();

  const addNewTask = (task) => {
    const sanitizedTitle = task.title
      .replace(TASK_SANITIZE_REGEX_PATTERN, "")
      .trim();
    if (sanitizedTitle === "") {
      setError(TITLE_FIELD_NAME_ATTRIBUTE, {
        type: ERROR_MESSAGE_CUSTOM_TYPE,
        message: ERROR_MESSAGE_TASK_TITLE,
      });
      showErrorToast(ERROR_MESSAGE_TASK_TITLE);
      setValue(TITLE_FIELD_NAME_ATTRIBUTE, sanitizedTitle);
      return;
    }

    dispatch(addTask(generateTaskObject(sanitizedTitle)));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    dispatch(filterTask(TASK_FILTER_ALL));
    showSuccessToast(SUCCESS_MESSAGE_TASK_ADDED);
    dispatch(resetVisibleTaskCount());
    dispatch(setSearchKey(""));
    onSuccessfullTaskEntry();
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

  const onValidationError = (errors) => {
    showErrorToast(errors.title.message);
  };

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, [setFocus]);

  return (
    <form
      onSubmit={handleSubmit(addNewTask, onValidationError)}
      className={styles.card}
    >
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
        className={`${styles.textArea}`}
      />

      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={`bg-white fw-500 ${styles.addTaskBtn}`}>
          Add Task
        </Button>
        <Button
          className="bg-white"
          buttonType={TYPE_BUTTON}
          onClick={onDelete}
        >
          <Image src={PATH_DELETE_ICON} alt={ALT_DELETE_ICON_TAG} />
        </Button>
      </div>
    </form>
  );
}

CreateTask.propTypes = {
  onSuccessfullTaskEntry: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default CreateTask;
