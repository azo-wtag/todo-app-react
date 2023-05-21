export const validateDate = (props, propName, componentName) => {
  const dateValue = props[propName];
  const timeStamp = Date.parse(dateValue);
  if (isNaN(timeStamp)) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ` +
        `Expected a valid date'.`
    );
  }
};
