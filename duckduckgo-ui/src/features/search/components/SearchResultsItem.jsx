import React from "react";
import Link from "@mui/material/Link";
import Highlighter from "react-highlight-words";
import { useSelector } from "react-redux";

const SearchResultsItem = ({ item, index }) => {
  const highligh = useSelector((state) => state.highlight);

  return (
    <Link href={item.url}>
      <Highlighter
        highlightClassName="highlight_result"
        textToHighlight={item.title}
        searchWords={[highligh.searchWord]}
      />
    </Link>
  );
};

export default SearchResultsItem;
