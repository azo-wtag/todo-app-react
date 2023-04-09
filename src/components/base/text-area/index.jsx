import React from "react";
import propTypes from "prop-types";
import { TEXTAREA_DEFAULT_ROW } from "utils/const";
import { connect } from "react-redux";

function TextArea({ numOfRows, register, error, isDisabled }) {
  return (
    <div>
      <textarea
        name="data"
        {...register}
        className="width-full"
        rows={numOfRows}
        disabled={isDisabled}
      ></textarea>
      {error && <p>{error.message}</p>}
    </div>
  );
}

TextArea.propTypes = {
  noOfRows: propTypes.number,
  register: propTypes.object.isRequired,
  error: propTypes.object,
  isDisabled: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isDisabled: state.filter.isFiltering,
});

TextArea.defaultProps = {
  noOfRows: TEXTAREA_DEFAULT_ROW,
};

export default connect(mapStateToProps)(TextArea);
