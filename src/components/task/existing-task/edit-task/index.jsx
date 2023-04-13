import React, { useEffect, useState } from "react";
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
import { editTask, markAsDone } from "store/actions/todo";
import styles from "components/task/existing-task/edit-task/index.module.scss";
import Loader from "components/base/loader";

function EditTaskForm({ taskId, existingTitle, onDeleteBtnClick, onTaskEdit }) {
  const dispath = useDispatch();
  useEffect(
    () => setValue(TITLE_FIELD_NAME_ATTRIBUTE, existingTitle),
    [existingTitle]
  );

  const [isTaskUpdating, setIsTaskUpdating] = useState(false);
  const updateTask = async (task) => {
    setIsTaskUpdating(true);
    await dispath(editTask({ taskId, title: task.title }));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    onTaskEdit();
    setIsTaskUpdating(false);
  };

  const saveAsDone = async (task) => {
    setIsTaskUpdating(true);
    await dispath(editTask({ taskId, title: task.title }));
    await dispath(markAsDone(taskId));
    setValue(TITLE_FIELD_NAME_ATTRIBUTE, null);
    onTaskEdit();
    setIsTaskUpdating(false);
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

  if (isTaskUpdating)
    return (
      <div className="relative width-full height-full">
        <Loader imageClassName={styles.loaderImage} />
      </div>
    );

  return (
    <form>
      <TextArea
        numOfRows={TASK_TEXTAREA_NUM_OF_ROW}
        register={{ ...register(TITLE_FIELD_NAME_ATTRIBUTE) }}
        error={errors.title}
        className={`fw-500 ${styles.textArea}`}
      />

      <div className={`flex items-center ${styles.btnContainer}`}>
        <Button
          onClick={handleSubmit(updateTask)}
          className={`bg-white ${styles.saveBtn}`}
        >
          Save
        </Button>
        <Button
          onClick={handleSubmit(saveAsDone)}
          className={`bg-white ${styles.doneBtn}`}
        >
          <Image src={CHECK_ICON_PATH} alt={CHECK_ICON_ALT_TAG} />
        </Button>
        <Button
          buttonType={TYPE_BUTTON}
          onClick={onDeleteBtnClick}
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
