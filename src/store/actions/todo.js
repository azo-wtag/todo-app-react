import dayjs from "dayjs";
import supabase from "config/index";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  LOAD_TASK_FROM_DB,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";
import { TASK_DATE_FORMAT } from "utils/const";
import { showErrorToast } from "utils/toast";

export const addTaskToTodo = (task) => {
  return async (dispatch) => {
    try {
      await supabase.from("tasks").insert([task]);
      dispatch({ type: ADD_TASK, payload: task });
    } catch (error) {
      showErrorToast(error.message);
    }
  };
};

export const deleteTaskFromTodo = (taskId) => {
  return async (dispatch) => {
    try {
      await supabase.from("tasks").delete().eq("id", taskId);
      dispatch({
        type: DELETE_TASK,
        payload: taskId,
      });
    } catch (error) {
      showErrorToast(error.message);
    }
  };
};

export const markTaskAsDone = (taskId) => {
  return async (dispatch) => {
    try {
      await supabase
        .from("tasks")
        .update({
          isCompleted: true,
          completedAt: dayjs().format(TASK_DATE_FORMAT),
        })
        .eq("id", taskId);
      dispatch({
        type: MARK_TASK_DONE,
        payload: taskId,
      });
    } catch (error) {
      showErrorToast(error.message);
    }
  };
};

export const editTaskFromTodo = (payload) => {
  return async (dispatch) => {
    try {
      await supabase
        .from("tasks")
        .update({ title: payload.title })
        .eq("id", payload.taskId);

      dispatch({
        type: EDIT_TASK,
        payload,
      });
    } catch (error) {
      showErrorToast(error.message);
    }
  };
};

export const loadTaskFromDB = (payload) => {
  return {
    type: LOAD_TASK_FROM_DB,
    payload,
  };
};
