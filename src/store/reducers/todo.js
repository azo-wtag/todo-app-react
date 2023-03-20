import dayjs from "dayjs";
import { ADD_TASK } from "../constants/actionTypes";

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
        ...initialTodoState,
        tasks: existingTasks,
      };
    }

    default:
      return state;
  }
};
