/* */
export function triggerSearch(term) {
  return {
    type: "SEARCH_STARTED",
    searchTerm: term,
  };
}

/*
 * Takes a search term, pings the API and then stores the response
 */
export function completeSearch(data) {
  return {
    ...data,
    type: "SEARCH_COMPLETE",
  };
}

/* */
export function triggerPagination(page) {
  return {
    type: "SEARCH_PAGINATION",
    currentPage: page,
  };
}

/* */
export function searchError(err) {
  return {
    type: "SEARCH_ERROR",
    error: err,
  };
}

/*
 * Resets the search back to its original state
 */
export function clearSearch() {
  return {
    type: "CLEAR",
  };
}
