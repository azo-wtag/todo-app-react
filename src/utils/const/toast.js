import { CHECK_ICON_WHITE_PATH } from "utils/const/images";

export const ERROR_TOAST_DEFAULT_OPTIONS = {
  icon: false,
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const SUCCESS_TOAST_DEFAULT_OPTIONS = {
  icon: () => <img src={CHECK_ICON_WHITE_PATH} alt="data" />,
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};
