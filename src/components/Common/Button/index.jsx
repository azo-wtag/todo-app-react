import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BUTTON_TYPE_SUBMIT } from "utils/const/form-elements";
import styles from "components/Common/Button/index.module.scss";

function Button({ children, className, buttonType, onClick }) {
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
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  buttonType: BUTTON_TYPE_SUBMIT,
  onClick: () => {},
};

export default Button;
