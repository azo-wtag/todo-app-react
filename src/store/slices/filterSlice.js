import { createSlice } from "@reduxjs/toolkit";
import { CARD_PER_PAGE } from "utils/const";

const initialState = {
  visibleCardCount: CARD_PER_PAGE,
  filteredCardState: 1,
  searchKey: "",
  isFiltering: false,
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

    toggleIsFiltering: (state, action) => {
      state.isFiltering = action.payload;
    },

    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

const { reducer } = filterSlice;
export const {
  loadMoreTask,
  resetVisibleTaskCount,
  decreaseNumOfVisibleTask,
  filterTask,
  toggleIsFiltering,
  setSearchKey,
} = filterSlice.actions;
export default reducer;
