import HeroSearch from "./components/HeroSearch";
import SearchList from "./components/SearchList";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div
        id="SearchHero"
        class="c-hero c-hero--overlap"
        style={{
          backgroundImage: `url(
            "https://static.skyassets.com/contentstack/assets/blt292fe19f56d1a1a8/bltf53e4fdb47e2f988/603d75890be9e76ed39a8246/SkyQ_AmazonPrimeVideo_ModalBackground_desktop.png"
          )`,
        }}
      >
        <div class="o-container">
          <HeroSearch />
        </div>
      </div>
      <div id="SearchList" class="o-container">
        <SearchList />
      </div>
    </div>
  );
}

export default App;
