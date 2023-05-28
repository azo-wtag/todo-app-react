export const generateTaskObject = (title) => {
  return {
    id: Date.now().toString(),
    title,
    createdAt: new Date(),
  };
};
