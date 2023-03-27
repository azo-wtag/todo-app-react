import * as yup from "yup";

export const taskSchema = yup
  .object({
    title: yup.string().trim().required("Please enter task description"),
  })
  .required();
