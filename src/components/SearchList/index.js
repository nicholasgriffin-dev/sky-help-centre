import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import selectors from "../../redux/selectors";
import { triggerPagination } from "../../redux/actions";

import { scroller } from "react-scroll";

function SearchList() {
  const {
    searchTerm,
    paginatedResults,
    searchResultsListCount,
    currentPage,
    maxPagesCount,
    hasSearched,
    searchIsLoading,
    searchError,
  } = useSelector(selectors.selectSearchData);

  const dispatch = useDispatch();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    let i = 1;
    const range = [];

    while (i <= maxPagesCount) {
      range.push(i);
      i += 1;
    }

    setPages(range);
  }, [searchResultsListCount, currentPage, maxPagesCount]);

  const triggerPaginationChange = (page) => {
    scroller.scrollTo("SearchList", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });

    dispatch(triggerPagination(page));
  };

  return (
    <article class="c-tile">
      <div class="c-tile__content">
        <div class="c-tile__body u-padding-all">
          {!hasSearched ? (
            <h1 class="c-tile__title u-text-center">
              Please use the search above to find knowledge base results.
            </h1>
          ) : searchIsLoading === true &&
            !searchError &&
            paginatedResults.length <= 0 ? (
            <h1 class="c-tile__title u-text-center">
              Please wait while we search the knowledge base
            </h1>
          ) : searchError ? (
            <h1 class="c-tile__title u-text-center">
              An error occurred while searching the knowledge base, please try
              later.
            </h1>
          ) : paginatedResults && paginatedResults.length > 0 ? (
            <>
              <h1 class="c-tile__title u-text-center">{`We found ${searchResultsListCount} results matching "${searchTerm}"`}</h1>
              <p class="c-text-body">
                {paginatedResults.map((article) => {
                  return (
                    <article class="c-tile">
                      <div class="c-tile__content">
                        <div class="c-tile__body u-padding-all">
                          <h2 class="c-tile__title">{article.title}</h2>
                          <p class="c-text-body">
                            {article.description}
                            <br></br>
                            <a href={article.url}>Read more</a>
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </p>
              {pages && pages.length > 1 && (
                <ul className="pages_list">
                  {pages.map((page) => {
                    return (
                      <li
                        onClick={() => triggerPaginationChange(page)}
                        className={`pages_item ${
                          page === currentPage ? "active_page" : "inactive_page"
                        }`}
                      >
                        {page}
                      </li>
                    );
                  })}
                </ul>
              )}
            </>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default SearchList;
