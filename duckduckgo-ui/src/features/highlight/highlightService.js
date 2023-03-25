import { countOccurrencesOfSearchTerm } from "./highlighUtils";

export const calculateWordMatchCount = (paginatedResults, searchWord) => {
  const joinResults = paginatedResults.map(({ title }) => title).join(" ");
  return searchWord ? countOccurrencesOfSearchTerm(searchWord, joinResults) : 0;
};
