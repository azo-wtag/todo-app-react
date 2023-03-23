import dayjs from "dayjs";

export const validateDayjsDate = (props, propName, componentName) => {
  const dateValue = props[propName];
  if (dateValue && !dayjs(dateValue).isValid()) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ` +
        `Expected a valid date'.`
    );
  }
};
