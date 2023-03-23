import React, { useCallback } from "react";
import HighlightSearchInput from "./components/Input";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setSearchWord } from "./highlightSlice";
import { useSelector } from "react-redux";

const HighlightSearch = () => {
  const dispatch = useDispatch();
  const { wordsMatchesCount } = useSelector((state) => state.highlight);

  const handleInputChange = useCallback(
    (event) => {
      dispatch(setSearchWord(event.target.value));
    },
    [dispatch]
  );

  return (
    <Box sx={{ ml: "auto" }}>
      <HighlightSearchInput
        wordsCount={wordsMatchesCount}
        inputProps={{
          onChange: handleInputChange,
        }}
      />
    </Box>
  );
};

export default HighlightSearch;
