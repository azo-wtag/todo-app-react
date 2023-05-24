import React from "react";
import PropTypes from "prop-types";
import { getDaysFromDate } from "utils/helper";

function CompletedDays({ endDate, startDate }) {
  return <p>Completed {getDaysFromDate(endDate, startDate)} days </p>;
}

CompletedDays.PropTypes = {
  endDate: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
};

export default CompletedDays;
