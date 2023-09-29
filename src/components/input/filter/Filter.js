import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  // const [countryList, setCountryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const countries = [{ name: "Japan" }, { name: "UK " }, { name: "China" }];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="filter-container">
      <div>Filter by Category:</div>
      <div>
        <select
          className="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="Japan">Japan</option>
          <option value="UK">UK</option>
          <option value="China">China</option>
        </select>
      </div>
      {selectedCategory}
    </div>
  );
};

export default Filter;
