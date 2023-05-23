import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { TEXTAREA_DEFAULT_ROW } from "utils/const/form-elements";

function TextArea(props) {
  const { errorMessage, numOfRows, name, autoFocus, value, onChange } = props;
  const taskInputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) {
      taskInputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <>
      <textarea
        className="width-full"
        name={name}
        value={value}
        rows={numOfRows}
        onChange={onChange}
        ref={taskInputRef}
      ></textarea>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

TextArea.propTypes = {
  errorMessage: PropTypes.string,
  numOfRows: PropTypes.number,
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  numOfRows: TEXTAREA_DEFAULT_ROW,
  errorMessage: "",
  autoFocus: false,
};

export default TextArea;