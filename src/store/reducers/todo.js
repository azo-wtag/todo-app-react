import { tasks } from "../../utils/const";
import { ADD_TASK } from "../constants/actionTypes";

const initialTodoState = {
  tasks: tasks,
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
      };
    default:
      return state;
  }
};
