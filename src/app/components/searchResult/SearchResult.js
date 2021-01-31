import React from "react";

const SearchResult = (props) => {
  return (
    <div>
      <span className="badge bg-success">{props.results}</span>
    </div>
  );
};

export default SearchResult;
