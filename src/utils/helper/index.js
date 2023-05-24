export const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const taskSanitizer = (text) => {
  return text.replace(/(<([^>]+)>)/g, "");
};

export const calculateDateDifference = (completedAt, createdAt) => {
  const dateDifference = dayjs(completedAt).diff(createdAt, "day");
  return dateDifference === 0
    ? `1 day`
    : `${Math.abs(dateDifference) + 1} days`;
};
