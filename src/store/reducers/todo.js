import dayjs from "dayjs";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  LOAD_TASK_FROM_DB,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";
import { TASK_DATE_FORMAT } from "utils/const";
import { findTaskIndexById } from "utils/helper";

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
      const existingTasks = [...state.tasks];
      const selectedTaskId = findTaskIndexById(action.payload, existingTasks);
      existingTasks[selectedTaskId].isCompleted = true;
      existingTasks[selectedTaskId].completedAt =
        dayjs().format(TASK_DATE_FORMAT);
      return { ...state, tasks: existingTasks };
    }

    case EDIT_TASK: {
      const existingTasks = [...state.tasks];
      const selectedTaskId = findTaskIndexById(
        action.payload.taskId,
        existingTasks
      );
      existingTasks[selectedTaskId].title = action.payload.title;
      return { ...state, tasks: existingTasks };
    }

    case LOAD_TASK_FROM_DB: {
      console.log(...action.payload);
      return {
        ...state,
        tasks: [...action.payload],
      };
    }

    default:
      return state;
  }
};
