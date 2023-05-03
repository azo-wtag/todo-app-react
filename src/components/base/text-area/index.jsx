import React from "react";
import propTypes from "prop-types";
import { TEXTAREA_DEFAULT_ROW } from "utils/const";

function TextArea({ error, numOfRows, register }) {
  return (
    <>
      <textarea
        {...register}
        className="width-full"
        rows={numOfRows}
      ></textarea>
      {error && <p>{error.message}</p>}
    </>
  );
}

TextArea.propTypes = {
  numOfRows: propTypes.number,
  register: propTypes.object.isRequired,
  error: propTypes.object,
};

TextArea.defaultProps = {
  numOfRows: TEXTAREA_DEFAULT_ROW,
};

export default TextArea;
