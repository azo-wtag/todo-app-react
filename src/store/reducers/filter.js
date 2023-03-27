import { LOAD_MORE_TASK } from "store/constants/actionTypes";

export const initialFilterState = {
  visibleCardCount: 9,
  filteredCardState: 1,
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case LOAD_MORE_TASK: {
      return { ...state };
    }
  }
};
