import React from "react";

import propTypes from "prop-types";

function TextArea({ noOfRows }) {
  return <textarea className="width-100" rows={noOfRows}></textarea>;
}

TextArea.propTypes = {
  noOfRows: propTypes.number,
};

TextArea.defaultProps = {
  noOfRows: 3,
};

export default TextArea;
