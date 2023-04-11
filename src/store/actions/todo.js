import supabase from "config/index";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  LOAD_TASK_FROM_DB,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";

export const addTaskToTodo = (task) => {
  return async (dispatch) => {
    try {
      await supabase.from("tasks").insert([task]);
      dispatch({ type: ADD_TASK, payload: task });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTaskFromTodo = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const markTaskAsDone = (taskId) => {
  return {
    type: MARK_TASK_DONE,
    payload: taskId,
  };
};

export const editTaskFromTodo = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

export const loadTaskFromDB = (payload) => {
  return {
    type: LOAD_TASK_FROM_DB,
    payload,
  };
};
