import * as yup from "yup";
import { ERROR_MESSAGE_TASK_TITLE } from "utils/const";

export const taskSchema = yup
  .object({
    title: yup.string().trim().required(ERROR_MESSAGE_TASK_TITLE),
  })
  .required();

export const searchTaskSchema = yup.object({
  title: yup.string().trim(),
});
