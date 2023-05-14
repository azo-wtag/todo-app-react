import {
  DECREASE_NUM_OF_VISIBLE_TASK,
  FILTER_TASK,
  LOAD_MORE_TASK,
  SET_SEARCH_KEY,
  RESET_VISIBLE_TASK_COUNT,
  SET_IS_FILTERING,
} from "store/constants/actionTypes";
import { CARD_PER_PAGE, TASK_FILTER_ALL } from "utils/const";

export const loadMoreTask = (taskCount = CARD_PER_PAGE) => {
  return {
    type: LOAD_MORE_TASK,
    payload: taskCount,
  };
};

export const showLessTasks = (taskCount = CARD_PER_PAGE) => {
  return {
    type: RESET_VISIBLE_TASK_COUNT,
    payload: taskCount,
  };
};

export const filterTask = (tasksState = TASK_FILTER_ALL) => {
  return {
    type: FILTER_TASK,
    payload: tasksState,
  };
};

export const decreaseNumOfVisibleTasks = (taskCount = 1) => {
  return {
    type: DECREASE_NUM_OF_VISIBLE_TASK,
    payload: taskCount,
  };
};

export const setSearchKey = (keyword) => {
  return {
    type: SET_SEARCH_KEY,
    payload: keyword,
  };
};

export const resetVisibleTaskCount = (taskCount = CARD_PER_PAGE) => {
  return {
    type: RESET_VISIBLE_TASK_COUNT,
    payload: taskCount,
  };
};

export const toggleIsFiltering = (isFiltering) => {
  return {
    type: SET_IS_FILTERING,
    payload: isFiltering,
  };
};
