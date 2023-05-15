import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { TASK_DATE_FORMAT } from "utils/const";

export const generateTaskObject = (title) => {
  return {
    id: uuidv4(),
    title: title,
    createdAt: dayjs().format(TASK_DATE_FORMAT),
    isCompleted: false,
    completedAt: null,
  };
};

export const calculateDateDifference = (completedAt, createdAt) => {
  const dateDifference = dayjs(completedAt).diff(createdAt, "day");
  return dateDifference === 0
    ? `1 day`
    : `${Math.abs(dateDifference) + 1} days`;
};

export const findTaskIndexById = (tasks, selectedTaskId) => {
  const selectedTaskIndex = tasks.findIndex((task) => {
    return task.id === selectedTaskId;
  });
  return selectedTaskIndex;
};
