import React from "react";
import propTypes from "prop-types";

function InputField({ classNames, type, register, error }) {
  return (
    <div>
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
  type: "text",
};

export default InputField;
