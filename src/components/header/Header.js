import React from "react";
import { Outlet } from "react-router-dom";
// import Country from "../country/Country";
import "./Header.css";

const header = () => {
  return (
    <div>
      <h1 className="header">Where In The World?</h1>
      <Outlet />
    </div>
  );
};

export default header;
