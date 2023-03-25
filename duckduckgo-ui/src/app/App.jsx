import React, { useEffect, useMemo } from "react";
import Home from "../pages/Home";
import { useDispatch, useSelector } from "react-redux"
import { setTotalPages } from "../features/pagination/paginationSlice";
import { fetchQueryHistoryAsync } from "../features/queryHistory/historySlice";
import { setWordMatchesCount } from "../features/highlight/highlightSlice";
import { setPaginatedResults } from "../features/search/searchSlice";
import { calculatePaginatedResults } from "../features/pagination/paginationService";
import { calculateWordMatchCount } from "../features/highlight/highlightService"


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
