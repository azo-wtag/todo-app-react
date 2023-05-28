import { ADD_TASK } from "store/constants/actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
