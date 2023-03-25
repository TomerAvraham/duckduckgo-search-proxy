export const calculatePaginatedResults = (results, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return results.slice(startIndex, endIndex);
};
