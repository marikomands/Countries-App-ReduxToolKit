import React from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../features/countries/CountriesSlice";

const Search = () => {
  const { searchTerm } = useSelector((state) => state.country);

  const dispatch = useDispatch();

  const handleInputValueChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search Country"
        value={searchTerm}
        onChange={handleInputValueChange}
      />

      <button type="submit" className="searchButton">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};
export default Search;
