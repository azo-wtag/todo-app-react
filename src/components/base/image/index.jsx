import React from "react";
import propTypes from "prop-types";

function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={className} />;
}

Image.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  className: propTypes.string,
};

Image.defaultProps = {
  className: null,
};

export default Image;
