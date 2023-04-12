import React from "react";
import propTypes from "prop-types";
import styles from "components/base/button/index.module.scss";
import { TYPE_SUBMIT } from "utils/const";

function Button({ children, onClick, className, buttonType }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  className: propTypes.string,
  onClick: propTypes.func,
  buttonType: propTypes.string,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  buttonType: TYPE_SUBMIT,
};

export default Button;
