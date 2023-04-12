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
  TITLE_FIELD_NAME_ATTRIBUTE,
} from "utils/const";
import { taskSchema } from "utils/schema";
import { editTaskFromTodo, markAsDone } from "store/actions/todo";

function EditTaskForm({ taskId, existingTitle, onDeleteBtnClick, onTaskEdit }) {
  const dispath = useDispatch();
  useEffect(
    () => setValue(TITLE_FIELD_NAME_ATTRIBUTE, existingTitle),
    [existingTitle]
  );

  const editTask = (task) => {
    dispath(editTaskFromTodo({ taskId, title: task.title }));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    onTaskEdit();
  };

  const saveTaskAsDone = (task) => {
    dispath(editTaskFromTodo({ taskId, title: task.title }));
    dispath(markAsDone(taskId));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    onTaskEdit();
  };

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(taskSchema),
  });

  useEffect(() => {
    setFocus(TITLE_FIELD_NAME_ATTRIBUTE);
  }, [setFocus]);

  return (
    <form>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
      />

      <div className="flex items-center">
        <Button onClick={handleSubmit(editTask)}>Save</Button>
        <Button onClick={handleSubmit(saveTaskAsDone)}>
          <Image src={CHECK_ICON_PATH} alt={CHECK_ICON_ALT_TAG} />
        </Button>
        <Button buttonType={TYPE_BUTTON} onClick={onDeleteBtnClick}>
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
