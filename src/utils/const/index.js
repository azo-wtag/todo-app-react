import dayjs from "dayjs";

export const tasks = [
  {
    id: "task#1",
    title: "Complete Initial setup of the Todo App",
    createdAt: dayjs().subtract(2, "day"),
    isCompleted: true,
    completedAt: dayjs().subtract(7, "day"),
  },

  {
    id: "task#2",
    title: "Complete Initial setup of the Todo App",
    createdAt: dayjs().subtract(4, "day"),
    isCompleted: false,
    completedAt: "",
  },

  {
    id: "task#3",
    title: "Complete Initial setup of the Todo App",
    createdAt: dayjs().subtract(1, "day"),
    isCompleted: false,
    completedAt: "",
  },
];
