import { ADD_TASK } from "store/constants/actionTypes";

const initialTodoState = {
  tasks: [],
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
