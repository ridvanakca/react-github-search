export const formatDate = (date) => {
  const elapsed = new Date().getTime() - new Date(date).getTime();
  const diff = Math.round(elapsed / (1000 * 60 * 60 * 24));
  return `${diff} days ago`;
};
