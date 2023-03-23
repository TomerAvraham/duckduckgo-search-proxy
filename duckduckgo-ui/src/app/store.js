import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import historyReducer from "../features/queryHistory/historySlice";
import paginationReducer from "../features/pagination/paginationSlice";
import highlightReducer from "../features/highlight/highlightSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    history: historyReducer,
    pagination: paginationReducer,
    highlight: highlightReducer,
  },
});

export default store;
