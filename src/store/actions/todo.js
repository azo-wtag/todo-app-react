import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const markAsDone = (taskId) => ({
  type: MARK_TASK_DONE,
  payload: taskId,
});
