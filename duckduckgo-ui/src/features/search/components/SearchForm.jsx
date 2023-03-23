import React, { useState, useEffect, useCallback, useMemo } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchAsync, setQuery } from "../searchSlice";
import { addQuery as setHistoryQuery } from "../../queryHistory/historySlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState("");
  const { query } = useSelector((state) => state.search);

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(setHistoryQuery(searchInputValue));
      dispatch(fetchSearchAsync(searchInputValue));
      dispatch(setQuery(searchInputValue));
    },
    [dispatch, searchInputValue]
  );

  const handleInputChange = useCallback(
    (event) => setSearchInputValue(event.target.value),
    []
  );
  const handleClearClick = useCallback(() => setSearchInputValue(""), []);

  const inputAdornment = useMemo(() => {
    return (
      <>
        <InputAdornment
          position="end"
          sx={{
            display: searchInputValue ? "flex" : "none",
            cursor: "pointer",
          }}
          onClick={handleClearClick}
        >
          <ClearIcon fontSize="1rem" />
        </InputAdornment>
        <InputAdornment sx={{ ml: 1 }} position="end">
          <Button
            sx={{ borderRadius: 0, paddingY: "7px" }}
            color="primary"
            disabled={!searchInputValue}
            type="submit"
            variant="contained"
          >
            <SearchIcon />
          </Button>
        </InputAdornment>
      </>
    );
  }, [handleClearClick, searchInputValue]);

  useEffect(() => {
    setSearchInputValue(query);
  }, [query]);

  return (
    <Box
      className="form_container"
      component="form"
      onSubmit={handleFormSubmit}
    >
      <FormControl>
        <TextField
          size="small"
          sx={{ width: 450 }}
          variant="outlined"
          onChange={handleInputChange}
          placeholder="Search"
          value={searchInputValue}
          InputProps={{
            sx: { pr: 0 },
            endAdornment: inputAdornment,
          }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchForm;
