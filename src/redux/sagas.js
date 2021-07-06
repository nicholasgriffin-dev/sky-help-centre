import { all, fork, put, takeLatest, call } from "redux-saga/effects";

import { searchError, completeSearch } from "./actions";

import getSearchResults from "../lib/search";

const errorMessage = (err) => {
  if (typeof err === "string") {
    return err;
  }

  if (err && err.message) {
    return err.message;
  }

  return "Something unexpected happened.";
};

function* handleSearch(action) {
  console.debug("handleSearch triggered");
  const searchTerm = action.searchTerm;
  try {
    if (searchTerm) {
      // Call the API to retrieve the results
      // TODO: This should be made into a library function
      const data = yield call(getSearchResults, { searchTerm });

      console.log(data);

      if (
        data &&
        data.results &&
        Array.isArray(data.results) &&
        data.results.length > 0
      ) {
        // Return the results and extra data
        const search_count = data.results.length;
        const maxPagesCount = search_count / 10;

        const search_payload = {
          searchTerm: searchTerm,
          searchResultsList: data.results,
          searchResultsListCount: search_count,
          maxPagesCount: maxPagesCount,
        };

        console.log(search_payload);

        yield put(completeSearch(search_payload));
      } else {
        yield put(searchError(errorMessage("No results found")));
      }
    } else {
      yield put(searchError(errorMessage("No search term was provided.")));
    }
  } catch (err) {
    console.error(err);
    yield put(searchError(errorMessage(err)));
  }
}

function* watchSearchRequest() {
  yield takeLatest("SEARCH_STARTED", handleSearch);
}

function* sagas() {
  yield all([fork(watchSearchRequest)]);
}

export default sagas;
