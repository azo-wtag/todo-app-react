import { ADD_TASK, DELETE_TASK } from "store/constants/actionTypes";
import { generateTaskObject } from "utils/helper";

const initialTodoState = {
  tasks: [generateTaskObject("Complete Initial setup of the Todo App")],
};

export const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const existingTasks = structuredClone(state.tasks);
      existingTasks.unshift(action.payload);
      return {
        ...state,
        tasks: existingTasks,
      };
    }

    case DELETE_TASK: {
      const existingTasks = structuredClone(state.tasks);
      existingTasks.splice(action.payload, 1);
      return { ...state, tasks: existingTasks };
    }

    default:
      return state;
  }
};
