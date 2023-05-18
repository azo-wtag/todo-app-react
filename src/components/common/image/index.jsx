import React from "react";
import PropTypes from "prop-types";

function Image({ alt, className, src }) {
  return <img src={src} alt={alt} className={className} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: null,
};

export default Image;
