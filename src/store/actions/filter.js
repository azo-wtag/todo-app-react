import {
  DECREASE_NUM_OF_VISIBLE_TASK,
  FILTER_TASK,
  LOAD_MORE_TASK,
  RESET_VISIBLE_TASK_COUNT,
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

export const resetVisibleTaskCount = (taskCount = CARD_PER_PAGE) => {
  return {
    type: RESET_VISIBLE_TASK_COUNT,
    payload: taskCount,
  };
};
