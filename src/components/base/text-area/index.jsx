import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { TEXTAREA_DEFAULT_ROW } from "utils/const";
import styles from "components/base/text-area/index.module.scss";

function TextArea({ numOfRows, register, error, className, isDisabled }) {
  return (
    <div>
      <textarea
        name="data"
        {...register}
        className={`width-full ${className}`}
        rows={numOfRows}
        disabled={isDisabled}
      ></textarea>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}

TextArea.propTypes = {
  noOfRows: propTypes.number,
  register: propTypes.object.isRequired,
  error: propTypes.object,
  className: propTypes.string,
  isDisabled: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isDisabled: state.filter.isFiltering,
});

TextArea.defaultProps = {
  noOfRows: TEXTAREA_DEFAULT_ROW,
  className: "",
};

export default connect(mapStateToProps)(TextArea);
