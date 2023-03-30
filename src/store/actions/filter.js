import {
  FILTER_TASK,
  LOAD_MORE_TASK,
  SHOW_LESS_TASK,
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
    type: SHOW_LESS_TASK,
    payload: taskCount,
  };
};

export const filterTask = (tasksState = TASK_FILTER_ALL) => {
  return {
    type: FILTER_TASK,
    payload: tasksState,
  };
};
