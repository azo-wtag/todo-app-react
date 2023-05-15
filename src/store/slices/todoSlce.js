import { createSlice } from "@reduxjs/toolkit";
import { generateTaskObject } from "utils/helper";

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
      state.tasks.splice(action.payload, 1);
    },
  },
});

const { reducer } = todoSlice;
export const { addTask, deleteTask } = todoSlice.actions;
export default reducer;
