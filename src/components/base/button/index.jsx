import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { TYPE_SUBMIT } from "utils/const";
import styles from "components/base/button/index.module.scss";

function Button({ buttonType, children, className, onClick }) {
  const buttonClass = classNames(styles.button, className);

  return (
    <button className={buttonClass} onClick={onClick} type={buttonType}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  buttonType: TYPE_SUBMIT,
};

export default Button;
