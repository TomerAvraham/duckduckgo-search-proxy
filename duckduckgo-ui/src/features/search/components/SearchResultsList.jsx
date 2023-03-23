import React from "react";
import SearchResultsItem from "./SearchResultsItem";

const SearchResultsList = ({ visibleResults }) => {
  return (
    <>
      {visibleResults.map((item, index) => (
        <SearchResultsItem item={item} key={index} />
      ))}
    </>
  );
};

export default SearchResultsList;
