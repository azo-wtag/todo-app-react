import { ADD_TASK, DELETE_TASK } from "store/constants/actionTypes";
import { findTaskIndexById, generateTaskObject } from "utils/helper";

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

    case DELETE_TASK: {
      const existingTasks = structuredClone(state.tasks);
      const selectedTaskId = findTaskIndexById(action.payload, existingTasks);
      existingTasks.splice(selectedTaskId, 1);
      return { ...state, tasks: existingTasks };
    }

    default:
      return state;
  }
};
