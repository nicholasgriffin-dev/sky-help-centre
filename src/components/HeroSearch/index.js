import logo from "./logo.svg";
import SearchForm from "./SearchForm";

function HeroSearch() {
  return (
    <section id="HeroSearch">
      <div className="HeroSearch_Contents">
        <div className="HeroSearch_Contents_Logo_Wrap">
          <img src={logo} className="HeroSearch_Contents_Logo" alt="Sky" />
        </div>
        <h1 className="c-heading-alpha">Looking for some support?</h1>
        <div className="HeroSearch_Contents_Search_Wrap">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}

export default HeroSearch;
