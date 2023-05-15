import dayjs from "dayjs";
import { createSlice, current } from "@reduxjs/toolkit";
import { findTaskIndexById, generateTaskObject } from "utils/helper";
import { NUM_OF_FAKE_TASK_IN_STORE, TASK_DATE_FORMAT } from "utils/const";

const initialState = {
  tasks: Array.from({ length: NUM_OF_FAKE_TASK_IN_STORE }, (_, i) => {
    return generateTaskObject(
      `Complete Initial setup of the Todo App ${i + 1}`
    );
  }),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.unshift(action.payload);
    },

    deleteTask: (state, action) => {
      const selectedIndex = findTaskIndexById(
        current(state.tasks),
        action.payload
      );
      state.tasks.splice(selectedIndex, 1);
    },

    markAsDone: (state, action) => {
      const selectedIndex = findTaskIndexById(
        current(state.tasks),
        action.payload
      );
      state.tasks[selectedIndex] = {
        ...state.tasks[selectedIndex],
        isCompleted: true,
        completedAt: dayjs().format(TASK_DATE_FORMAT),
      };
    },

    editTask: (state, action) => {
      const selectedIndex = findTaskIndexById(
        current(state.tasks),
        action.payload.taskId
      );
      state.tasks[selectedIndex] = {
        ...state.tasks[selectedIndex],
        title: action.payload.title,
      };
    },
  },
});

const { reducer } = todoSlice;
export const { addTask, deleteTask, markAsDone, editTask } = todoSlice.actions;
export default reducer;
