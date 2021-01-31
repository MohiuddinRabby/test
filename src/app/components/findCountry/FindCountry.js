import React, { useEffect, useState } from "react";
import { getCountryList } from "./Api/api";
import "./style.css";
const FindCountry = () => {
  const [countryList, setCountryList] = useState([]);
  let search = countryList;
  console.log(search);
  const [itemToSearch, setItemToSearch] = useState("");
  useEffect(() => {
    getCountryList(setCountryList);
  }, []);
  const searchItems = (item) => {
    item.preventDefault();
    setItemToSearch(item.target.value);
  };
  if (itemToSearch.length > 0) {
    search = search.filter((i) => {
      // return i.name.match(itemToSearch);
      return i.name.toLowerCase().includes(itemToSearch.toLowerCase());
    });
  }
  return (
    <div className="container">
      <div className="mt-5">
        <label className="form-label">Search Country</label>
        <input
          type="text"
          className="form-control"
          onChange={searchItems}
          value={itemToSearch}
        />
      </div>
      <div className="row">
        {search.map((items) => (
          <div className="col-md-2">{items.name}</div>
        ))}
      </div>
    </div>
  );
};

export default FindCountry;
