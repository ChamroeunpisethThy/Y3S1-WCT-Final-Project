import './bgImg.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();


  const fetchData = (value) => {
    fetch("https://newest-3wwi.onrender.com/provincesData")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((data) => {
        return (
            value &&
            data.nameEn &&
            data.nameEn.trim().toLowerCase().includes(value)
          );
      });
      setResults(results);
    })
    .catch((error) => {
      console.error("Error fetching data with nameEn:", error);
    });
  }
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  
  const handleSearchClick = () => {
    navigate(input.toLowerCase());
  };
  return (
    <>
      <div className="container-fluid bg-light p-0 d-none d-lg-inline">
        <div className="d-flex justify-content-center align-items-center bg-img-lg">
          <div className='p-3 d-flex align-items-center bg-white rounded' style={{marginTop: "150px"}}>
            <i className="bi bi-search fs-5"></i>
            <input
              style={{width: "500px", height: "40px"}}
              className='rounded p-2 border-1 mx-4'
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className='btn btn-primary btn-lg d-flex align-items-center' style={{height: "42px"}} onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light p-0 d-lg-none">
        <div className="d-flex justify-content-center align-items-center bg-img">
          <div className='bg-white p-3 rounded d-flex align-items-center' style={{marginTop: "150px"}}>
            <i className="bi bi-search fs-5"></i>
            <input
              style={{maxWidth: "600px", height: "40px"}}
              className='rounded p-2 border-1 mx-4'
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button className='btn btn-primary btn-lg d-flex align-items-center' style={{height: "42px"}} onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      </div>
    </>
  )
}
SearchBar.propTypes = {
  setResults: PropTypes.func.isRequired
}
export default SearchBar