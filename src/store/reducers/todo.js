import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";

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

    case DELETE_TASK: {
      const filteredTasks = state.tasks.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, tasks: filteredTasks };
    }

    case MARK_TASK_DONE: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isCompleted: true,
            completedAt: new Date(),
          };
        }

        return { ...task };
      });
      return { ...state, tasks: updatedTasks };
    }

    default:
      return state;
  }
};
