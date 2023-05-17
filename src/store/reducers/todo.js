import dayjs from "dayjs";
import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";
import { TASK_DATE_FORMAT } from "utils/const";
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

    default:
      return state;
  }
};
