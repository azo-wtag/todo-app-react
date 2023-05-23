import Image from "components/base/image";
import { ALT_CHECK_WHITE_ICON_TAG, ICON_CHECK_BG_WHITE } from "utils/const";

const TOAST_POSITION = "top-center";
const AUTO_CLOSE = 2000;
const HIDE_PROGRESSBAR = false;
const CLOSE_ONCLICK = true;
const PAUSE_ONHOVER = true;
const DRAGGABLE = true;
const THEME = "colored";
const BG_ERROR = "#E85F5F";
const BG_SUCCESS = "#0BC375";

export const NUM_OF_CONCURRENT_TOAST = 3;

export const ERROR_TOAST_DEFAULT_OPTIONS = {
  icon: false,
  position: TOAST_POSITION,
  autoClose: AUTO_CLOSE,
  hideProgressBar: HIDE_PROGRESSBAR,
  closeOnClick: CLOSE_ONCLICK,
  pauseOnHover: PAUSE_ONHOVER,
  draggable: DRAGGABLE,
  theme: THEME,
  style: {
    backgroundColor: BG_ERROR,
  },
};

export const SUCCESS_TOAST_DEFAULT_OPTIONS = {
  icon: () => (
    <Image src={ICON_CHECK_BG_WHITE} alt={ALT_CHECK_WHITE_ICON_TAG} />
  ),
  position: TOAST_POSITION,
  autoClose: AUTO_CLOSE,
  hideProgressBar: HIDE_PROGRESSBAR,
  closeOnClick: CLOSE_ONCLICK,
  pauseOnHover: PAUSE_ONHOVER,
  draggable: DRAGGABLE,
  theme: THEME,
  style: {
    backgroundColor: BG_SUCCESS,
  },
};
