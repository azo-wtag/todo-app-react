import React from "react";
import propTypes from "prop-types";

import styles from "components/base/button/index.module.scss";
import { TYPE_SUBMIT } from "utils/const";

function Button({ children, onButtonClick, className, buttonType }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onButtonClick}
      type={buttonType}
    >
      {children}
    </button>
  );
}

Image.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  className: propTypes.string,
  onButtonClick: propTypes.func,
  buttonType: propTypes.string,
};

Image.defaultProps = {
  className: "",
  onButtonClick: () => {},
  buttonType: TYPE_SUBMIT,
};

export default Button;
