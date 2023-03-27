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
  TASK_TEXTAREA_NUM_OF_ROW,
  DELETE_ICON_ALT_TAG,
  DELETE_ICON_PATH,
  TYPE_BUTTON,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { generateTaskObject } from "utils/helper";
import { addTaskToTodo } from "store/actions/todo";

function CreateTask({ onSuccessfullTaskEntry, onDeleteBtnClick }) {
  const dispatch = useDispatch();

  const addNewTask = (task) => {
    //console.log(DOMPurify.sanitize(task.title));
    const sanitizedTitle = DOMPurify.sanitize(task.title);
    if (sanitizedTitle === "") {
      setError("title", {
        type: "custom",
        message: "Please enter valid title",
      });
      return;
    }
    dispatch(addTaskToTodo(generateTaskObject(sanitizedTitle)));
    setValue("title", "");
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
    resolver: yupResolver(taskSchema),
  });

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(addNewTask)}>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register("title") }}
        error={errors.title}
      />

      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={styles.addTaskBtn}>Add Task</Button>
        <Button buttonType={TYPE_BUTTON} onButtonClick={onDeleteBtnClick}>
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
