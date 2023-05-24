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
  return parseInt((completedAt - createdAt) / (1000 * 60 * 60 * 24), 10) + 1;
};
