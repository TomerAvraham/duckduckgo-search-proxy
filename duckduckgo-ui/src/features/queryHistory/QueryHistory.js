import React from "react";
import QueryHistoryList from "./components/QueryHistoryList";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const { queries } = useSelector((state) => state.history);
  return <QueryHistoryList queries={queries} />;
};

export default QueryHistory;
