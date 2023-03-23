import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";

import styles from "components/task/create-new/index.module.scss";
import Button from "components/base/button";
import TextArea from "components/base/text-area";
import Image from "components/base/image";
import { addTaskToTodo } from "store/actions/todo";
import { TASK_TEXTAREA_NUM_OF_ROW, DELETE_ICON_ALT_TAG } from "utils/const";
import { addNewTaskSchema } from "utils/schema";
import { generateTaskObject } from "utils/helper";

function CreateTask({ onSuccessfullTaskEntry }) {
  const dispatch = useDispatch();

  const addNewTask = (task) => {
    dispatch(addTaskToTodo(generateTaskObject(task.title)));
    setValue("title", "");
    onSuccessfullTaskEntry();
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addNewTaskSchema),
  });

  return (
    <form onSubmit={handleSubmit(addNewTask)}>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register("title") }}
        error={errors.title}
      />

      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={styles.addTaskBtn}>Add Task</Button>
        <Button buttonType="button">
          <Image src="delete.png" alt={DELETE_ICON_ALT_TAG} />
        </Button>
      </div>
    </form>
  );
}

CreateTask.propTypes = {
  onSuccessfullTaskEntry: propTypes.func.isRequired,
};

export default CreateTask;
