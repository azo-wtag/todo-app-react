import React, { forwardRef } from "react";
import propTypes from "prop-types";
import { TEXTAREA_DEFAULT_ROW } from "utils/const";

const TextArea = forwardRef(function TextArea(props, ref) {
  const { errorMsg, numOfRows, name } = props;

  return (
    <>
      <textarea
        className="width-full"
        rows={numOfRows}
        ref={ref}
        name={name}
      ></textarea>
      {errorMsg !== "" && <p>{errorMsg}</p>}
    </>
  );
});

TextArea.propTypes = {
  errorMsg: propTypes.string,
  numOfRows: propTypes.number,
  name: propTypes.string.isRequired,
};

TextArea.defaultProps = {
  numOfRows: TEXTAREA_DEFAULT_ROW,
};

export default TextArea;
