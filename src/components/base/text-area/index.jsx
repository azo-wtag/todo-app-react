import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { TEXTAREA_DEFAULT_ROW } from "utils/const";

function TextArea({ numOfRows, register, error, isDisabled }) {
  return (
    <>
      <textarea
        {...register}
        className="width-full"
        rows={numOfRows}
        disabled={isDisabled}
      ></textarea>
      {error && <p>{error.message}</p>}
    </>
  );
}

TextArea.propTypes = {
  numOfRows: propTypes.number,
  register: propTypes.object.isRequired,
  error: propTypes.object,
  isDisabled: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isDisabled: state.filter.isFiltering,
});

TextArea.defaultProps = {
  numOfRows: TEXTAREA_DEFAULT_ROW,
};

export default connect(mapStateToProps)(TextArea);
