import { ADD_TASK, DELETE_TASK } from "store/constants/actionTypes";

export const addTaskToTodo = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const deleteTaskFromTodo = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};
