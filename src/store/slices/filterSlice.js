import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visibleCardCount: 9,
  filteredCardState: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    loadMoreTask: (state, action) => {
      state.visibleCardCount += action.payload;
    },
  },
});

const { reducer } = filterSlice;
export const { loadMoreTask } = filterSlice.actions;
export default reducer;
