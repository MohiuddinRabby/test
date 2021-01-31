import React from "react";
import "./AllCountrires.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const AllCountry = (props) => {
  const { name } = props.allCountrires;
  return (
    <div className="list-group-item align-items-center d-flex justify-content-between border-bottom shadow">
      <span>{name}</span>
      <div className="buttons-group my-2">
        <button className="btn btn-secondary btn-sm mr-2">
          <FontAwesomeIcon icon={faPlus} onClick={() => props.result(name)} />
        </button>
      </div>
    </div>
  );
};

export default AllCountry;
