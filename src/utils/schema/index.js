import * as yup from "yup";

export const addNewTaskSchema = yup
  .object({
    title: yup.string().required("Please enter task description"),
  })
  .required();
