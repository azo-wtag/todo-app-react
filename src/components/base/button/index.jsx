import React from "react";
import propTypes from "prop-types";
import styles from "components/base/button/index.module.scss";
import { TYPE_SUBMIT } from "utils/const";
import { connect } from "react-redux";

function Button({
  children,
  onButtonClick,
  className,
  buttonType,
  isDisabled,
}) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onButtonClick}
      type={buttonType}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  className: propTypes.string,
  onButtonClick: propTypes.func,
  buttonType: propTypes.string,
  isDisabled: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isDisabled: state.filter.isFiltering,
});

Button.defaultProps = {
  className: "",
  onButtonClick: () => {},
  buttonType: TYPE_SUBMIT,
};

export default connect(mapStateToProps)(Button);
