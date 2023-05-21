export const generateTaskObject = (title) => {
  return {
    id: Date.now().toString(),
    title: title,
    createdAt: new Date(),
    isCompleted: false,
    completedAt: null,
  };
};
