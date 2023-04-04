import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ERROR_TOAST_DEFAULT_OPTIONS,
  SUCCESS_TOAST_DEFAULT_OPTIONS,
} from "utils/const";

export const showSuccessToast = (
  message,
  options = ERROR_TOAST_DEFAULT_OPTIONS
) => {
  toast.error(message, options);
};

export const showErrorToast = (
  message,
  options = SUCCESS_TOAST_DEFAULT_OPTIONS
) => {
  toast.error(message, options);
};
