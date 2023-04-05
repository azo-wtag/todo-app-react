import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import TextArea from "components/base/text-area";
import Button from "components/base/button";
import Image from "components/base/image";
import {
  TASK_TEXTAREA_NUM_OF_ROW,
  CHECK_ICON_ALT_TAG,
  CHECK_ICON_PATH,
  DELETE_ICON_ALT_TAG,
  DELETE_ICON_PATH,
  TYPE_BUTTON,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { editTaskFromTodo, markTaskAsDone } from "store/actions/todo";
import styles from "components/task/existing-task/edit-task/index.module.scss";
function EditTaskForm({ taskId, existingTitle, onDeleteBtnClick, onTaskEdit }) {
  const dispath = useDispatch();
  useEffect(() => setValue("title", existingTitle), [existingTitle]);

  const editTask = (task) => {
    dispath(editTaskFromTodo({ taskId, title: task.title }));
    setValue("title", "");
    onTaskEdit();
  };

  const saveTaskAsDone = (task) => {
    dispath(editTaskFromTodo({ taskId, title: task.title }));
    dispath(markTaskAsDone(taskId));
    setValue("title", "");
    onTaskEdit();
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(taskSchema),
  });

  return (
    <form>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register("title") }}
        error={errors.title}
        className={`fw-500 ${styles.textArea}`}
      />

      <div className={`flex items-center ${styles.btnContainer}`}>
        <Button
          onButtonClick={handleSubmit(editTask)}
          className={`bg-white ${styles.saveBtn}`}
        >
          Save
        </Button>
        <Button
          onButtonClick={handleSubmit(saveTaskAsDone)}
          className={`bg-white ${styles.doneBtn}`}
        >
          <Image src={CHECK_ICON_PATH} alt={CHECK_ICON_ALT_TAG} />
        </Button>
        <Button
          buttonType={TYPE_BUTTON}
          onButtonClick={onDeleteBtnClick}
          className="bg-white"
        >
          <Image src={DELETE_ICON_PATH} alt={DELETE_ICON_ALT_TAG} />
        </Button>
      </div>
    </form>
  );
}

EditTaskForm.propTypes = {
  taskId: propTypes.string.isRequired,
  onDeleteBtnClick: propTypes.func.isRequired,
  onTaskEdit: propTypes.func.isRequired,
};

export default EditTaskForm;
