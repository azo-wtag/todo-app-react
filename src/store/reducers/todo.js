import dayjs from "dayjs";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  LOAD_TASK_FROM_DB,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";
import { TASK_DATE_FORMAT } from "utils/const";

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
            completedAt: dayjs().format(TASK_DATE_FORMAT),
          };
        }

        return { ...task };
      });
      return { ...state, tasks: updatedTasks };
    }

    case EDIT_TASK: {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            title: action.payload.title,
          };
        }

        return { ...task };
      });
      return { ...state, tasks: updatedTasks };
    }

    case LOAD_TASK_FROM_DB: {
      return {
        ...state,
        tasks: [...action.payload],
      };
    }

    default:
      return state;
  }
};
