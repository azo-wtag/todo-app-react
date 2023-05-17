import { ADD_TASK, DELETE_TASK } from "store/constants/actionTypes";
import { generateTaskObject } from "utils/helper";

const initialTodoState = {
  tasks: [generateTaskObject("Complete Initial setup of the Todo App")],
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        tasks: [{ ...action.payload }, ...state.tasks],
      };
    }

    case DELETE_TASK: {
      const filteredTasks = state.tasks.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, tasks: filteredTasks };
    }

    default:
      return state;
  }
};
