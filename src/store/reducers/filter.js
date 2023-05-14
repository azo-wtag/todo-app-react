import {
  DECREASE_NUM_OF_VISIBLE_TASK,
  FILTER_TASK,
  LOAD_MORE_TASK,
  RESET_VISIBLE_TASK_COUNT,
} from "store/constants/actionTypes";
import { CARD_PER_PAGE, TASK_FILTER_ALL } from "utils/const";

const initialFilterState = {
  visibleCardCount: CARD_PER_PAGE,
  filteredCardState: TASK_FILTER_ALL,
};

export const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case LOAD_MORE_TASK: {
      return {
        ...state,
        visibleCardCount: state.visibleCardCount + action.payload,
      };
    }

    case RESET_VISIBLE_TASK_COUNT: {
      return {
        ...state,
        visibleCardCount: action.payload,
      };
    }

    case FILTER_TASK: {
      return { ...state, filteredCardState: action.payload };
    }

    case DECREASE_NUM_OF_VISIBLE_TASK: {
      return {
        ...state,
        visibleCardCount: state.visibleCardCount - action.payload,
      };
    }

    default:
      return state;
  }
};
