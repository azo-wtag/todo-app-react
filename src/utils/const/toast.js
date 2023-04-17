import { ALT_CHECK_WHITE_ICON_TAG, PATH_CHECK_WHITE_ICON } from "utils/const";

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
    <img src={PATH_CHECK_WHITE_ICON} alt={ALT_CHECK_WHITE_ICON_TAG} />
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
