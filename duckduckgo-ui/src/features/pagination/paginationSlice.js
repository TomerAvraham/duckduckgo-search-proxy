import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  pageSize: 10,
  totalPages: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setTotalPages: (state, action) => {
      const totalPages = Math.ceil(action.payload / state.pageSize);
      state.totalPages = totalPages;
    },
  },
});

export const { setPage, setPageSize, setTotalPages } = paginationSlice.actions;

export default paginationSlice.reducer;
