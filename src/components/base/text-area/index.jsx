import React, { forwardRef } from "react";
import PropTypes from "prop-types";
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
  errorMsg: PropTypes.string,
  numOfRows: PropTypes.number,
  name: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
  numOfRows: TEXTAREA_DEFAULT_ROW,
  errorMsg: "",
};

export default TextArea;
