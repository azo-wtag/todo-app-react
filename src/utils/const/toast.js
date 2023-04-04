import {
  CHECK_ICON_WHITE_PATH,
  CHECK_WHITE_ICON_ALT_TAG,
} from "utils/const/images";

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
  style: {
    backgroundColor: "#E85F5F",
  },
};

export const SUCCESS_TOAST_DEFAULT_OPTIONS = {
  icon: () => (
    <img src={CHECK_ICON_WHITE_PATH} alt={CHECK_WHITE_ICON_ALT_TAG} />
  ),
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  style: {
    backgroundColor: "#0BC375",
  },
};
