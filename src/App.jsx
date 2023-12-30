import { Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';
import Footer from './component/General/Footer.jsx';
import About from './component/General/About.jsx';
import Home from './component/General/Home.jsx';
import Navbar from './component/General/Navbar.jsx';
import Contact from './component/General/Contact.jsx';
import SearchBar from './component/Search/SearchBar.jsx';
import SearchResultsList from "./component/Search/SearchResultList.jsx";
import MainContent from './component/Content/MainContent.jsx';
import Bookmark from './component/Bookmark/BookmarkList.jsx';
import Page404 from './component/General/Page404.jsx';

export const LanguageContext = createContext("English");

function App() {
  const [results, setResults] = useState([]);
  const [language, setLanguage] = useState('English');
  const handleLanguageChange = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'English' ? 'Khmer' : 'English'));
  };
  return (
    <>
      <LanguageContext.Provider value={language} >
        <Navbar onLanguageChange={handleLanguageChange}/>
        <SearchBar setResults={setResults}/>
        {results && results.length > 0 && <SearchResultsList results={results} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<MainContent />} />
            <Route path="*" element={<Page404 />}/>
          </Routes>
        <Footer />
      </LanguageContext.Provider>
    </>
  );
}

export default App