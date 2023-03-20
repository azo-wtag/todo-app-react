import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../base/button";
import Image from "../../base/image";
import TextArea from "../../base/text-area";
import Styles from "./index.module.scss";
import { addNewTaskSchema } from "../../../utils/schema";

function CreateTask() {
  const addNewTask = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(addNewTaskSchema),
  });

  return (
    <form onSubmit={handleSubmit(addNewTask)}>
      <TextArea
        noOfRows={4}
        register={{ ...register("title") }}
        error={errors.title}
      />

      <div className={`flex items-center ${Styles.buttonContainer}`}>
        <Button className={Styles.addTaskBtn}>Add Task</Button>
        <Button buttonType="button">
          <Image src="delete.png" alt="check" />
        </Button>
      </div>
    </form>
  );
}

export default CreateTask;
