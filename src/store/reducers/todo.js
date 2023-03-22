import dayjs from "dayjs";
import {
  ADD_TASK,
  DELETE_TASK,
  MARK_TASK_DONE,
} from "../constants/actionTypes";

const initialTodoState = {
  tasks: [
    {
      id: `task#${dayjs().format("YYYY-MM-DD HH:mm:ss")}`,
      title: "Complete Initial setup of the Todo App",
      createdAt: dayjs().subtract(4, "day").format("YYYY-MM-DD"),
      isCompleted: false,
      completedAt: "",
    },
  ],
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

    case MARK_TASK_DONE: {
      const existingTasks = structuredClone(state.tasks);
      existingTasks[action.payload].isCompleted = true;
      existingTasks[action.payload].completedAt = dayjs().format("YYYY-MM-DD");
      return { ...state, tasks: existingTasks };
    }

    default:
      return state;
  }
};
