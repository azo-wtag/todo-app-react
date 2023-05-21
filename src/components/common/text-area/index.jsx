import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { TEXTAREA_DEFAULT_ROW } from "utils/const/formElements";

function TextArea(props) {
  const { errorMessage, numOfRows, name, shouldAutoFocus, value, onChange } =
    props;
  const taskInputRef = useRef(null);

  useEffect(() => {
    if (shouldAutoFocus) {
      taskInputRef.current.focus();
    }
  }, []);

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
      {errorMessage !== "" && <p>{errorMessage}</p>}
    </>
  );
}

TextArea.propTypes = {
  errorMessage: PropTypes.string,
  numOfRows: PropTypes.number,
  name: PropTypes.string.isRequired,
  shouldAutoFocus: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextArea.defaultProps = {
  numOfRows: TEXTAREA_DEFAULT_ROW,
  errorMessage: "",
  shouldAutoFocus: false,
};

export default TextArea;
