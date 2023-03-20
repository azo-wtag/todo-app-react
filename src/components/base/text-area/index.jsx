import React from "react";

import propTypes from "prop-types";

function TextArea({ noOfRows, register, error }) {
  return (
    <div>
      <textarea
        name="data"
        {...register}
        className="width-100"
        rows={noOfRows}
      ></textarea>
      {error && <p>{error.message}</p>}
    </div>
  );
}

TextArea.propTypes = {
  noOfRows: propTypes.number,
  register: propTypes.object.isRequired,
  error: propTypes.object,
};

TextArea.defaultProps = {
  noOfRows: 3,
};

export default TextArea;
