import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSearchResults } from "../../services/api";

const initialState = {
  query: "",
  results: [],
  paginatedResults: [],
  status: "idle",
  error: null,
};

export const fetchSearchAsync = createAsyncThunk(
  "search/fetchSearchResults",
  async (query) => {
    const response = await fetchSearchResults(query);
    return response;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },

    setPaginatedResults: (state, action) => {
      state.paginatedResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchAsync.fulfilled, (state, action) => {
        state.status = action.payload.length ? "success" : "no results";
        state.results = action.payload;
      })
      .addCase(fetchSearchAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setQuery, setPaginatedResults } = searchSlice.actions;

export default searchSlice.reducer;
