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
  DELETE_ICON_ALT_TAG,
  DELETE_ICON_PATH,
  TITLE_FIELD_NAME_ATTRIBUTE,
  CUSTOM_ERROR_MESSAGE_TYPE,
  TASK_TITLE_ERROR_MESSAGE,
  TYPE_BUTTON,
  FORM_VALIDATION_MODE_ONCHANGE,
  TASK_ADDED_SUCCESS_MESSAGE,
  TASK_SANITIZE_REGEX_PATTERN,
  TASK_FILTER_ALL,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { generateTaskObject } from "utils/helper";
import { addTask } from "store/actions/todo";
import { showSuccessToast } from "utils/toast";
import { filterTask, setisLoading, setSearchKey } from "store/actions/filter";

function CreateTask({ onSuccessfullTaskEntry, onDeleteBtnClick }) {
  const dispatch = useDispatch();

  const addNewTask = (task) => {
    dispatch(setisLoading(true));
    const sanitizedTitle = task.title
      .replace(TASK_SANITIZE_REGEX_PATTERN, "")
      .trim();
    if (sanitizedTitle === "") {
      setError(TITLE_FIELD_NAME_ATTRIBUTE, {
        type: CUSTOM_ERROR_MESSAGE_TYPE,
        message: TASK_TITLE_ERROR_MESSAGE,
      });

      setValue(TITLE_FIELD_NAME_ATTRIBUTE, sanitizedTitle);

      dispatch(setisLoading(false));
      return;
    }
    dispatch(addTask(generateTaskObject(sanitizedTitle)));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    dispatch(filterTask(TASK_FILTER_ALL));
    showSuccessToast(TASK_ADDED_SUCCESS_MESSAGE);
    dispatch(setSearchKey(""));
    onSuccessfullTaskEntry();
    dispatch(setisLoading(false));
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

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(addNewTask)} className={styles.card}>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
        className={styles.textArea}
      />

      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={`bg-white fw-500 ${styles.addTaskBtn}`}>
          Add Task
        </Button>
        <Button
          className="bg-white"
          buttonType={TYPE_BUTTON}
          onClick={onDeleteBtnClick}
        >
          <Image src={DELETE_ICON_PATH} alt={DELETE_ICON_ALT_TAG} />
        </Button>
      </div>
    </form>
  );
}

CreateTask.propTypes = {
  onSuccessfullTaskEntry: propTypes.func.isRequired,
  onDeleteBtnClick: propTypes.func.isRequired,
};

export default CreateTask;
