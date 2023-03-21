import React from "react";
import propTypes from "prop-types";

function Image({ src, alt, className }) {
  const image = require(`assets/images/${src}`);

  return (
    <div>
      <img src={image} alt={alt} className={className} />
    </div>
  );
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
