export const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const taskSanitizer = (text) => {
  return text.replace(/(<([^>]+)>)/g, "");
};

export const getDaysFromDate = (completedAt, createdAt) => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  return parseInt((completedAt - createdAt) / day, 10) + 1;
};
