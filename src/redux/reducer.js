const initialState = {
  searchTerm: null,
  searchResultsList: [],
  paginatedResults: [],
  searchResultsCount: 0,
  maxPagesCount: 0,
  currentPage: 1,
  resultsPerPage: 10,
  hasSearched: false,
  searchIsLoading: false,
  searchError: null,
};

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_STARTED":
      return {
        ...initialState,
        searchTerm: action.searchTerm,
        hasSearched: true,
        searchIsLoading: true,
      };
    case "SEARCH_COMPLETE":
      return {
        ...state,
        searchTerm: action.searchTerm,
        searchResultsList: action.searchResultsList,
        searchResultsListCount: action.searchResultsListCount,
        paginatedResults: paginate(
          action.searchResultsList,
          state.resultsPerPage,
          state.currentPage
        ),
        maxPagesCount: Math.ceil(action.maxPagesCount),
        hasSearched: true,
        searchIsLoading: false,
      };
    case "SEARCH_PAGINATION":
      return {
        ...state,
        currentPage: action.currentPage,
        paginatedResults: paginate(
          state.searchResultsList,
          state.resultsPerPage,
          action.currentPage
        ),
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        hasSearched: true,
        searchIsLoading: false,
        searchError: action.error,
      };
    case "CLEAR":
      return { ...initialState };
    default:
      return state;
  }
}

export default addReducer;
