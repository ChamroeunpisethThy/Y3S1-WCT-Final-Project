import { useContext } from "react";
import { useState } from "react";
import HightlightList from "./HightlightList";
import LatestList from "./LatestList";
import PopularList from "./PopularList";
import SearchBar from "../Search/SearchBar.jsx"
import SearchResultsList from "../Search/SearchResultList.jsx"
import { LanguageContext } from "../../App";
import "../../assets/styles/home.css";

const Home = () => {
  const [results, setResults] = useState([]);
  const language = useContext(LanguageContext);
  return (
    <>
      <SearchBar setResults={setResults}/>
      {results && results.length > 0 && <SearchResultsList results={results} />}
      <div className="d-flex flex-column align-content-center">
        <div  className="d-flex flex-column align-content-center">
          <h1 className="text-center my-3 fw-bold">{language === 'English' ? 'Popular' : "កន្លែងល្បី"}</h1>
          <PopularList />
        </div>
        <div className="d-flex flex-column align-content-center">
          <h1 className="text-center my-3 fw-bold">{language === 'English' ? 'Highlight' : "កន្លែងសំខាន់"}</h1>
          <HightlightList  />
        </div>
        <div className="d-flex flex-column align-content-center">
          <h1 className="text-center my-3 fw-bold">{language === 'English' ? 'Latest' : "កន្លែងក្រោយបំផុត"}</h1>
          <LatestList />
        </div>
      </div>
    </>
  );
};

export default Home;
