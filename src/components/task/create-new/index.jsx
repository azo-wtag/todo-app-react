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
  CUSTOM_ERROR_MESSAGE_TYPE,
  TASK_TITLE_ERROR_MESSAGE,
  TYPE_BUTTON,
  FORM_VALIDATION_MODE_ONCHANGE,
} from "utils/const";
import { addNewTaskSchema } from "utils/schema";
import { generateTaskObject } from "utils/helper";
import { addTask } from "store/actions/todo";

function CreateTask({ onSuccessfullTaskEntry, onDeleteBtnClick }) {
  const dispatch = useDispatch();

  const addNewTask = (task) => {
    const sanitizedTitle = DOMPurify.sanitize(task.title);
    if (sanitizedTitle === "") {
      setError(TITLE_FIELD_NAME_ATTRIBUTE, {
        type: CUSTOM_ERROR_MESSAGE_TYPE,
        message: TASK_TITLE_ERROR_MESSAGE,
      });
      setValue(TITLE_FIELD_NAME_ATTRIBUTE, sanitizedTitle);
      return;
    }
    dispatch(addTask(generateTaskObject(sanitizedTitle)));
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
    mode: FORM_VALIDATION_MODE_ONCHANGE,
    resolver: yupResolver(addNewTaskSchema),
  });

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, []);

  return (
    <form onSubmit={handleSubmit(addNewTask)}>
      <TextArea
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
      />

      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={styles.addTaskBtn}>Add Task</Button>
        <Button buttonType={TYPE_BUTTON} onClick={onDeleteBtnClick}>
          <Image src={ICON_DELETE} alt={ALT_DELETE_ICON_TAG} />
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
