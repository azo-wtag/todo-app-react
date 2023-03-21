import React from "react";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import propTypes from "prop-types";
import { useDispatch } from "react-redux";

import styles from "./index.module.scss";
import Button from "components/base/button";
import TextArea from "components/base/text-area";
import Image from "components/base/image";
import { addNewTaskSchema } from "utils/schema";
import { addTaskToTodo } from "store/actions/todo";

function CreateTask({ onSuccessfullTaskEntry }) {
  const dispatch = useDispatch();

  const addNewTask = (data) => {
    const task = {
      id: `task#${dayjs().format("YYYY-MM-DD HH:mm:SSS")}`,
      title: data.title,
      createdAt: dayjs().format("YYYY-MM-DD"),
      isCompleted: false,
      completedAt: null,
    };

    dispatch(addTaskToTodo(task));
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
        numOfRows={4}
        register={{ ...register("title") }}
        error={errors.title}
      />

      <div className={`flex items-center ${styles.buttonContainer}`}>
        <Button className={styles.addTaskBtn}>Add Task</Button>
        <Button buttonType="button">
          <Image src="delete.png" alt="check" />
        </Button>
      </div>
    </form>
  );
}

CreateTask.propTypes = {
  onSuccessfullTaskEntry: propTypes.func.isRequired,
};

export default CreateTask;
