import dayjs from "dayjs";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  MARK_TASK_DONE,
} from "store/constants/actionTypes";
import { TASK_DATE_FORMAT } from "utils/const";
import { findTaskIndexById, generateTaskObject } from "utils/helper";

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
      const selectedTaskId = findTaskIndexById(action.payload, existingTasks);
      existingTasks.splice(selectedTaskId, 1);
      return { ...state, tasks: existingTasks };
    }

    case MARK_TASK_DONE: {
      const existingTasks = structuredClone(state.tasks);
      const selectedTaskId = findTaskIndexById(action.payload, existingTasks);
      existingTasks[selectedTaskId].isCompleted = true;
      existingTasks[selectedTaskId].completedAt =
        dayjs().format(TASK_DATE_FORMAT);
      return { ...state, tasks: existingTasks };
    }

    case EDIT_TASK: {
      const existingTasks = structuredClone(state.tasks);
      const selectedTaskId = findTaskIndexById(
        action.payload.taskId,
        existingTasks
      );
      existingTasks[selectedTaskId].title = action.payload.title;
      return { ...state, tasks: existingTasks };
    }

    default:
      return state;
  }
};
