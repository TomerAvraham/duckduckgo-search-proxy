export const countOccurrencesOfSearchTerm = (searchTerm, inputString) => {
  const searchTermRegex = new RegExp(searchTerm, "gi");
  const searchTermMatches = inputString.match(searchTermRegex);
  return searchTermMatches ? searchTermMatches.length : 0;
};
