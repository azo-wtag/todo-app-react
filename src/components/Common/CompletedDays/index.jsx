import React from "react";
import PropTypes from "prop-types";
import { getDaysFromDate } from "utils/helper";

function CompletedDays({ endDate, startDate }) {
  return <p>Completed {getDaysFromDate(endDate, startDate)} days </p>;
}

CompletedDays.propTypes = {
  endDate: PropTypes.instanceOf(Date).isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
};

export default CompletedDays;
