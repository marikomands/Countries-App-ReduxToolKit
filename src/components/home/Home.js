import React from "react";
import Filter from "../input/filter/Filter";
import Search from "../input/search/Search";

const Home = () => {
  return (
    <section className="home-page-container">
      <div className="inputContainer">
        <Search />
        <Filter />
      </div>
    </section>
  );
};

export default Home;
