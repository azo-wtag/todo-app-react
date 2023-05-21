export const generateTaskObject = (title) => {
  return {
    id: Date.now().toString(),
    title: title,
    createdAt: new Date(),
    isCompleted: false,
    completedAt: null,
  };
};

export const formatDate = (date) => {
  const today = new Date(date);
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

export const sanitizer = (text) => {
  return text.replace(/(<([^>]+)>)/g, "");
};
