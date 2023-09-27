import React from "react";

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" class="searchTerm" placeholder="Search..." />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
};
export default Search;
