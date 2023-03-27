import * as yup from "yup";

export const addNewTaskSchema = yup
  .object({
    title: yup.string().trim().required("Please enter task description"),
  })
  .required();
