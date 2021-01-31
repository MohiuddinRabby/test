import React, { useEffect, useState } from "react";
import AllCountry from "../allCountry/AllCountry";
import { getCountryList } from "./Api/api";
import "./CountryForm.css";
const CountryForm = () => {
  const [countryList, setCountryList] = useState([]);
  let search = countryList;
  // search country state
  const [itemToSearch, setItemToSearch] = useState("");
  useEffect(() => {
    // country api
    getCountryList(setCountryList);
  }, []);
  const searchItems = (item) => {
    item.preventDefault();
    setItemToSearch(item.target.value);
  };
  if (itemToSearch.length > 0) {
    search = search.filter((i) => {
      return i.name.toLowerCase().includes(itemToSearch.toLowerCase());
    });
  }
  // search result items
  const [searchResults, setSearchResults] = useState([]);
  //
  const result = (countries) => {
    setSearchResults([...searchResults, countries]);
  };
  return (
    <div className="col-md-4 mx-auto px-2">
      <div className="justify-content-center mt-5">
        <h6>Search Country</h6>
        <div className="input-group mb-2 mr-sm-2">
          <input
            type="text"
            className="form-control"
            onChange={searchItems}
            value={itemToSearch}
          />
        </div>
      </div>
      <div className="btn btn-primary mt-2 mb-2">Save</div>
      {/*SearchResult component  */}
      <div className="row">
        {searchResults?.map((results, index) => (
          <div className="col-md-3" key={index}>
            <span className="badge bg-success">{results}</span>
          </div>
        ))}
      </div>
      {/* AllCountry component */}
      <div className="country-list">
        {search.map((allCountrires) => (
          <div key={allCountrires.alpha3Code}>
            <AllCountry
              allCountrires={allCountrires}
              result={result}
            ></AllCountry>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryForm;
