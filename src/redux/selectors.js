import { createSelector } from "reselect";

const selectRaw = (state) => state;

const selectSearchData = createSelector([selectRaw], (state) => {
  return {
    searchTerm: state.searchTerm,
    searchResultsList: state.searchResultsList,
    searchResultsListCount: state.searchResultsListCount,
    paginatedResults: state.paginatedResults,
    currentPage: state.currentPage,
    maxPagesCount: state.maxPagesCount,
    hasSearched: state.hasSearched,
    searchIsLoading: state.searchIsLoading,
    searchError: state.searchError,
  };
});

export default {
  selectRaw,
  selectSearchData,
};
