import { LOAD_MORE_TASK, SHOW_LESS_TASK } from "store/constants/actionTypes";
import { CARD_PER_PAGE } from "utils/const";

const initialFilterState = {
  visibleCardCount: CARD_PER_PAGE,
  filteredCardState: 1,
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case LOAD_MORE_TASK: {
      return {
        ...state,
        visibleCardCount: state.visibleCardCount + action.payload,
      };
    }

    case SHOW_LESS_TASK: {
      return {
        ...state,
        visibleCardCount: action.payload,
      };
    }

    default:
      return state;
  }
};
