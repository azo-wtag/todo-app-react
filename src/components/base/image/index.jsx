import React from "react";
import propTypes from "prop-types";

function Image({ src, alt, className }) {
  return (
    <div>
      <img
        src={require(`../../../assets/images/${src}`)}
        alt={alt}
        className={className}
      />
    </div>
  );
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  className: propTypes.string,
};

Image.defaultProps = {
  className: "",
};

export default Image;
