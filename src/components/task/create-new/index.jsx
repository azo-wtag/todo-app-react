import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";

import styles from "components/task/create-new/index.module.scss";
import Button from "components/base/button";
import TextArea from "components/base/text-area";
import Image from "components/base/image";
import { addTaskToTodo } from "store/actions/todo";
import {
  TASK_TEXTAREA_NUM_OF_ROW,
  DELETE_ICON_ALT_TAG,
  DELETE_ICON_PATH,
  TITLE_FIELD_NAME_ATTRIBUTE,
  CUSTOM_ERROR_MESSAGE_TYPE,
  TASK_TITLE_ERROR_MESSAGE,
} from "utils/const";
import { addNewTaskSchema } from "utils/schema";
import { generateTaskObject } from "utils/helper";

function CreateTask({ onSuccessfullTaskEntry, onDeleteBtnClick }) {
  const dispatch = useDispatch();

  const addNewTask = (task) => {
    const sanitizedTitle = task.title.replace(/(<.*?>)/g, "");
    if (sanitizedTitle === "") {
      setError(TITLE_FIELD_NAME_ATTRIBUTE, {
        type: CUSTOM_ERROR_MESSAGE_TYPE,
        message: TASK_TITLE_ERROR_MESSAGE,
      });
      setValue(TITLE_FIELD_NAME_ATTRIBUTE, sanitizedTitle);
      return;
    }
    dispatch(addTaskToTodo(generateTaskObject(sanitizedTitle)));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, "");
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
    mode: "onChange",
    resolver: yupResolver(addNewTaskSchema),
  });

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(addNewTask)}>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
      />

      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={styles.addTaskBtn}>Add Task</Button>
        <Button buttonType="button" onButtonClick={onDeleteBtnClick}>
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
