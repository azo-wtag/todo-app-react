import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BUTTON_TYPE_SUBMIT } from "utils/const/form-elements";
import styles from "components/Commons/Buttons/index.module.scss";

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
  buttonType: BUTTON_TYPE_SUBMIT,
};

export default Button;
