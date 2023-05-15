import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import DOMPurify from "dompurify";
import styles from "components/task/create-new/index.module.scss";
import Button from "components/base/button";
import TextArea from "components/base/text-area";
import Image from "components/base/image";
import {
  ALT_DELETE_ICON_TAG,
  ICON_DELETE,
  TITLE_FIELD_NAME_ATTRIBUTE,
  ERROR_MESSAGE_CUSTOM_TYPE,
  ERROR_MESSAGE_TASK_TITLE,
  TYPE_BUTTON,
  FORM_VALIDATION_MODE_ONCHANGE,
  SUCCESS_MESSAGE_TASK_ADDED,
  TASK_FILTER_ALL,
  CARD_PER_PAGE,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { generateTaskObject } from "utils/helper";

import { addTask } from "store/slices/todoSlce";
import {
  filterTask,
  resetVisibleTaskCount,
  setSearchKey,
} from "store/slices/filterSlice";
import { showErrorToast, showSuccessToast } from "utils/toast";

function CreateTask({ onSuccessfullTaskEntry, onDeleteClick }) {
  const dispatch = useDispatch();

  function addNewTask(task) {
    const sanitizedTitle = DOMPurify.sanitize(task.title);
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
    dispatch(resetVisibleTaskCount(CARD_PER_PAGE));
    dispatch(setSearchKey(""));
    onSuccessfullTaskEntry();
  }

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
  }, []);

  return (
    <form
      onSubmit={handleSubmit(addNewTask, onValidationError)}
      className={styles.card}
    >
      <TextArea
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
          onClick={onDeleteClick}
        >
          <Image src={ICON_DELETE} alt={ALT_DELETE_ICON_TAG} />
        </Button>
      </div>
    </form>
  );
}

CreateTask.propTypes = {
  onSuccessfullTaskEntry: propTypes.func.isRequired,
  onDeleteClick: propTypes.func.isRequired,
};

export default CreateTask;
