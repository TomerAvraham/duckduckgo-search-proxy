import React, { useEffect, useMemo, useCallback } from "react";
import Home from "../pages/Home";
import { useDispatch, useSelector } from "react-redux"
import { setTotalPages } from "../features/pagination/paginationSlice";
import { fetchQueryHistoryAsync } from "../features/queryHistory/historySlice";
import { countOccurrencesOfSearchTerm } from "../features/highlight/highlighUtils"
import { setWordMatchesCount } from "../features/highlight/highlightSlice";
import { setPaginatedResults } from "../features/search/searchSlice";

const calculatePaginatedResults = (results, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return results.slice(startIndex, endIndex);
};

const calculateWordMatchCount = (paginatedResults, searchWord) => {
  const joinResults = paginatedResults.map(({ title }) => title).join(" ");
  return searchWord ? countOccurrencesOfSearchTerm(searchWord, joinResults) : 0;
};

const App = () => {
  const dispatch = useDispatch();
  const { currentPage, pageSize } = useSelector((state) => state.pagination);
  const { results } = useSelector((state) => state.search);
  const { searchWord } = useSelector((state) => state.highlight);

  const paginatedResults = useMemo(() => {
    return calculatePaginatedResults(results, currentPage, pageSize);
  }, [currentPage, pageSize, results]);

  const wordMatchCount = useMemo(() => {
    return calculateWordMatchCount(paginatedResults, searchWord);
  }, [paginatedResults, searchWord]);

  useEffect(() => {
    dispatch(setTotalPages(results.length));
    dispatch(setPaginatedResults(paginatedResults));
  }, [results, dispatch, paginatedResults]);

  useEffect(() => {
    dispatch(setWordMatchesCount(wordMatchCount));
  }, [searchWord, dispatch, wordMatchCount])

  useEffect(() => {
    dispatch(fetchQueryHistoryAsync())
      .catch((error) => {
        console.log("Error fetching query history", error);
      });
  }, [dispatch]);

  return (
    <Home />
  );
};

export default App;
