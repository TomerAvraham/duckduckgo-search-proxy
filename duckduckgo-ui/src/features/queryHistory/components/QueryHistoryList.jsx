import React from "react";
import List from "@mui/material/List";
import ListSubheader from '@mui/material/ListSubheader';
import QueryHistoryItem from "./QueryHistoryItem";

const QueryHistoryList = ({ queries = [] }) => {
  return (
    <List>
      <ListSubheader>
        Search History
      </ListSubheader>
      {queries.map((query, index) => (
        <QueryHistoryItem query={query} key={index} />
      ))}
    </List>
  );
};

export default QueryHistoryList;
