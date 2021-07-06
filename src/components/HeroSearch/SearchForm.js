import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import selectors from "../../redux/selectors";
import { triggerSearch } from "../../redux/actions";

function SearchForm() {
  const {
    searchTerm,
    searchResultsList,
    searchResultsCount,
    maxPagesCount,
    hasSearched,
    searchIsLoading,
    searchError,
  } = useSelector(selectors.selectSearchData);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sky_search_help: searchTerm || "",
    },
  });

  const onSubmit = (data) => {
    if (data && data["sky_search_help"]) {
      console.debug(`Now searching for: ${data["sky_search_help"]}`);
      dispatch(triggerSearch(data["sky_search_help"]));
    } else {
      console.error("No search term provided.");
    }
  };

  return (
    <div id="SearchForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend class="c-form-caption">Example</legend>
          <ul class="c-form-list">
            <li
              class={`c-form-list__item ${
                errors && errors["sky_search_help"] ? "is-error" : ""
              }`}
            >
              <label class="c-form-label" for="f-combo">
                Search our help centre:
              </label>
              <div class="c-form-combo">
                <div class="c-form-combo__cell">
                  <input
                    {...register("sky_search_help")}
                    defaultValue=""
                    type="text"
                    class="c-form-combo__input c-form-input"
                    placeholder="Enter your search term"
                    name="sky_search_help"
                    id="sky_search_help"
                  />
                </div>
                <div class="c-form-combo__cell">
                  <button
                    type="submit"
                    class="c-form-combo__btn c-btn c-btn--primary"
                  >
                    Search
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  );
}

export default SearchForm;
