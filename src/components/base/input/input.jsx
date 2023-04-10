import React from "react";
import propTypes from "prop-types";
import { INPUT_TYPE_TEXT } from "utils/const";

function InputField({ classNames, type, register, error }) {
  return (
    <div className="width-full">
      <input type={type} className={classNames} {...register} />{" "}
      {error && <p>{error.message}</p>}
    </div>
  );
}

InputField.propTypes = {
  classNames: propTypes.string,
  type: propTypes.string,
  register: propTypes.object.isRequired,
  error: propTypes.object,
};

InputField.defaultProps = {
  classNames: "",
  type: INPUT_TYPE_TEXT,
};

export default InputField;