import { createSlice } from "@reduxjs/toolkit";
import { CARD_PER_PAGE } from "utils/const";

const initialState = {
  visibleCardCount: CARD_PER_PAGE,
  filteredCardState: 1,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    loadMoreTask: (state, action) => {
      state.visibleCardCount += action.payload;
    },

    resetVisibleTaskCount: (state, action) => {
      state.visibleCardCount = action.payload;
    },

    decreaseNumOfVisibleTask: (state, action) => {
      state.visibleCardCount -= action.payload;
    },

    filterTask: (state, action) => {
      state.filteredCardState = action.payload;
    },
  },
});

const { reducer } = filterSlice;
export const {
  loadMoreTask,
  resetVisibleTaskCount,
  decreaseNumOfVisibleTask,
  filterTask,
} = filterSlice.actions;
export default reducer;
