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

export const findTaskById = (taskId, tasks) => {
  return tasks.find((task) => task.id === taskId);
};

export const findTaskIndexById = (taskId, tasks) => {
  return tasks.findIndex((task) => task.id === taskId);
};

export const filterTaskByStatusTitle = (tasks, isCompleted, title = "") => {
  return tasks.filter(
    (task) =>
      task.isCompleted === isCompleted &&
      task.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
  );
};

export const filterTaskByTitle = (tasks, title = "") => {
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
