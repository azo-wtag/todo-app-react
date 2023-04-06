import { ADD_TASK } from "store/constants/actionTypes";
import { generateTaskObject } from "utils/helper";

const initialTodoState = {
  tasks: [generateTaskObject("Complete Initial setup of the Todo App")],
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    }

    default:
      return state;
  }
};
