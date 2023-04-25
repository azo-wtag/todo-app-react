import Image from "components/base/image";
import { ALT_CHECK_WHITE_ICON_TAG, PATH_CHECK_WHITE_ICON } from "utils/const";

const TOAST_POSITION = "top-center";
const AUTO_CLOSE = 5000;
const HIDE_PROGRESSBAR = false;
const CLOSE_ONCLICK = true;
const PAUSE_ONHOVER = true;
const DRAGGABLE = true;
const PROGRESS = undefined;
const THEME = "colored";

export const ERROR_TOAST_DEFAULT_OPTIONS = {
  icon: false,
  position: TOAST_POSITION,
  autoClose: AUTO_CLOSE,
  hideProgressBar: HIDE_PROGRESSBAR,
  closeOnClick: CLOSE_ONCLICK,
  pauseOnHover: PAUSE_ONHOVER,
  draggable: DRAGGABLE,
  progress: PROGRESS,
  theme: THEME,
  style: {
    backgroundColor: "#E85F5F",
  },
};

export const SUCCESS_TOAST_DEFAULT_OPTIONS = {
  icon: () => (
    <Image src={PATH_CHECK_WHITE_ICON} alt={ALT_CHECK_WHITE_ICON_TAG} />
  ),
  position: TOAST_POSITION,
  autoClose: AUTO_CLOSE,
  hideProgressBar: HIDE_PROGRESSBAR,
  closeOnClick: CLOSE_ONCLICK,
  pauseOnHover: PAUSE_ONHOVER,
  draggable: DRAGGABLE,
  progress: PROGRESS,
  theme: THEME,
  style: {
    backgroundColor: "#0BC375",
  },
};
