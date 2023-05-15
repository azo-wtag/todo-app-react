import dayjs from "dayjs";
import { createSlice, current } from "@reduxjs/toolkit";
import { findTaskIndexById, generateTaskObject } from "utils/helper";
import { TASK_DATE_FORMAT } from "utils/const";

const initialState = {
  tasks: [generateTaskObject("Complete Initial setup of the Todo App")],
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
  },
});

const { reducer } = todoSlice;
export const { addTask, deleteTask, markAsDone } = todoSlice.actions;
export default reducer;
