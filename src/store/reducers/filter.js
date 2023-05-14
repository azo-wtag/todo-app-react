import {
  DECREASE_NUM_OF_VISIBLE_TASK,
  FILTER_TASK,
  LOAD_MORE_TASK,
  SET_SEARCH_KEY,
  RESET_VISIBLE_TASK_COUNT,
  SET_IS_FILTERING,
} from "store/constants/actionTypes";
import { CARD_PER_PAGE, TASK_FILTER_ALL } from "utils/const";

const initialFilterState = {
  visibleCardCount: CARD_PER_PAGE,
  filteredCardState: TASK_FILTER_ALL,
  searchKey: "",
  isFiltering: false,
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

    case SET_SEARCH_KEY:
      return { ...state, searchKey: action.payload };

    case SET_IS_FILTERING: {
      return { ...state, isFiltering: action.payload };
    }

    default:
      return state;
  }
};
