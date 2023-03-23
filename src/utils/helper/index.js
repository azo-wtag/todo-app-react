import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

export const generateTaskObject = (title) => {
  return {
    id: uuidv4(),
    title: title,
    createdAt: dayjs().format("YYYY-MM-DD"),
    isCompleted: false,
    completedAt: "",
  };
};
