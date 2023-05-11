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

export const filterTaskByStatusTitle = (tasks, isCompleted, title = "") => {
  return tasks.filter(
    (task) =>
      task.isCompleted === isCompleted &&
      task.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );
};

export const filterTaskByTitle = (tasks, title = "") => {
  if (title === "") {
    return tasks;
  }

  return tasks.filter((task) =>
    task.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );
};

export const calculateDateDifference = (completedAt, createdAt) => {
  const dateDifference = dayjs(completedAt).diff(createdAt, "day");
  return dateDifference === 0
    ? `1 day`
    : `${Math.abs(dateDifference) + 1} days`;
};

export const debounce = (fn, delay) => {
  let timerId;
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
