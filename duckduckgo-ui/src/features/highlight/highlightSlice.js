import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchWord: "",
  wordsMatchesCount: 0,
};

export const highlightSlice = createSlice({
  name: "highlight",
  initialState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload;
    },
    setWordMatchesCount: (state, action) => {
      state.wordsMatchesCount = action.payload;
    },
  },
});

export const { setSearchWord, setWordMatchesCount } = highlightSlice.actions;

export default highlightSlice.reducer;
