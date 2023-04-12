import React from "react";
import propTypes from "prop-types";
import { TEXTAREA_DEFAULT_ROW } from "utils/const";

function TextArea({ numOfRows, register, error }) {
  return (
    <div>
      <textarea
        {...register}
        className="width-full"
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
};

TextArea.defaultProps = {
  noOfRows: TEXTAREA_DEFAULT_ROW,
};

export default TextArea;
