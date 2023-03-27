import { LOAD_MORE_TASK } from "store/constants/actionTypes";

export const loadMoreTask = (taskCount = 9) => {
  return {
    type: LOAD_MORE_TASK,
    payload: taskCount,
  };
};
