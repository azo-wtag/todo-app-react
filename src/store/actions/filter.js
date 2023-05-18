import {
  DECREASE_NUM_OF_VISIBLE_TASK,
  LOAD_MORE_TASK,
  SHOW_LESS_TASK,
} from "store/constants/actionTypes";
import { CARD_PER_PAGE } from "utils/const";

export const loadMoreTask = (taskCount = CARD_PER_PAGE) => {
  return {
    type: LOAD_MORE_TASK,
    payload: taskCount,
  };
};

export const showLessTasks = (taskCount = CARD_PER_PAGE) => {
  return {
    type: SHOW_LESS_TASK,
    payload: taskCount,
  };
};

export const decreaseNumOfVisibleTasks = (taskCount = 1) => {
  return {
    type: DECREASE_NUM_OF_VISIBLE_TASK,
    payload: taskCount,
  };
};
