import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQueryHistory } from "../../services/api";

const initialState = {
  queries: [],
  status: "idle",
  error: null,
};
export const fetchQueryHistoryAsync = createAsyncThunk(
  "history/fetchQueryHistory",
  async () => {
    const response = await fetchQueryHistory();
    return response;
  }
);

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      state.queries.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueryHistoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQueryHistoryAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.queries = action.payload;
      })
      .addCase(fetchQueryHistoryAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addQuery } = historySlice.actions;

export default historySlice.reducer;
