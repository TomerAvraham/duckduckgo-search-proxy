import React from "react";
import StylePagination from "./components/StylePagination";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "./paginationSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.pagination);
  const handlePaginationChange = (event, page) => {
    dispatch(setPage(page));
  };
  return (
    <StylePagination
      onChange={handlePaginationChange}
      count={totalPages}
      page={currentPage}
    />
  );
};

export default Pagination;
