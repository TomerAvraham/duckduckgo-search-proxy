import React, { useCallback } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import { useDispatch } from "react-redux";
import { setQuery } from "../../search/searchSlice"
import { fetchSearchAsync } from "../../search/searchSlice";

const QueryHistoryItem = ({ query }) => {
  const dispatch = useDispatch();

  const handleItemClick = useCallback(() => {
    dispatch(setQuery(query));
    dispatch(fetchSearchAsync(query))
  }, [dispatch, query]);

  return (
    <ListItem disablePadding onClick={handleItemClick} button divider>
      <ListItemButton>
        <ListItemText primary={query} />
      </ListItemButton>
    </ListItem>
  );
};

export default QueryHistoryItem;
