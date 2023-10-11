import React from "react";
import Filter from "../input/filter/Filter";
import Search from "../input/search/Search";
import Country from "../country/Country";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-page-container">
        <div className="input">
          <Search />
        </div>
        <div className="input">
          <Filter />
        </div>
      </div>
      <div>
        <Country />
      </div>
    </div>
  );
};

export default Home;
