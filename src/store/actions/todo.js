import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";

export const addTaskToTodo = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTaskFromTodo = (taskIndex) => {
  return {
    type: DELETE_TASK,
    payload: taskIndex,
  };
};

export const markTaskAsDone = (taskIndex) => {
  return {
    type: MARK_TASK_DONE,
    payload: taskIndex,
  };
};
