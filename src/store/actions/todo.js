import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const markAsDone = (taskId) => {
  return {
    type: MARK_TASK_DONE,
    payload: taskId,
  };
};
