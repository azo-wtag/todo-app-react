import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { TASK_DATE_FORMAT } from "utils/const/formElements";

export const generateTaskObject = (title) => {
  return {
    id: uuidv4(),
    title: title,
    createdAt: dayjs().format(TASK_DATE_FORMAT),
    isCompleted: false,
    completedAt: null,
  };
};

export const parseForm = (submittedData) => {
  const formData = new FormData(submittedData);
  const formJson = Object.fromEntries(formData);
  return formJson;
};
