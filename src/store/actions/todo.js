import { ADD_TASK } from "store/constants/actionTypes";

export const addTaskToTodo = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
