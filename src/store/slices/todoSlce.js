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
  },
});

const { reducer } = todoSlice;
export const { addTask } = todoSlice.actions;
export default reducer;
