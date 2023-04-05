import React from "react";
import propTypes from "prop-types";
import { TEXTAREA_DEFAULT_ROW } from "utils/const";

function TextArea({ numOfRows, register, error, className }) {
  return (
    <div>
      <textarea
        name="data"
        {...register}
        className={`width-100 ${className}`}
        rows={numOfRows}
      ></textarea>
      {error && <p>{error.message}</p>}
    </div>
  );
}

TextArea.propTypes = {
  noOfRows: propTypes.number,
  register: propTypes.object.isRequired,
  error: propTypes.object,
  className: propTypes.string,
};

TextArea.defaultProps = {
  noOfRows: TEXTAREA_DEFAULT_ROW,
  className: "",
};

export default TextArea;
