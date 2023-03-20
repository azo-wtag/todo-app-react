import React from "react";
import propTypes from "prop-types";

function Button({ children, onButtonClick, className }) {
  return (
    <button className={className} onClick={onButtonClick}>
      {children}
    </button>
  );
}

Image.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  className: propTypes.string,
  onButtonClick: propTypes.func,
};

Image.defaultProps = {
  className: "",
  onButtonClick: () => {},
};

export default Button;
