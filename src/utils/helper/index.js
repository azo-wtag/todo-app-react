export const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const taskSanitizer = (text) => {
  return text.replace(/(<([^>]+)>)/g, "");
};
