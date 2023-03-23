import Box from "@mui/material/Box";
import {
  SearchResultsList,
  NoResultsMessage,
  ErrorMessage,
  Loader,
  SearchForm,
} from "./components";
import { useSelector } from "react-redux";

const Search = () => {
  const { status, error, paginatedResults, query } = useSelector(
    (state) => state.search
  );
  return (
    <>
      <SearchForm />
      <Box className="results_container">
        {(() => {
          switch (status) {
            case "loading":
              return <Loader />;
            case "failed":
              return <ErrorMessage error={error} />;
            case "success":
              return <SearchResultsList visibleResults={paginatedResults} />;
            case "no results":
              return <NoResultsMessage query={query} />;
            default:
              return null;
          }
        })()}
      </Box>
    </>
  );
};

export default Search;
