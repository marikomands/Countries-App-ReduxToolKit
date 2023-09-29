import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CountryDetails from "./components/countryDetails/CountryDetails";
import Country from "./components/country/Country";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/:code" element={<CountryDetails />} />
          <Route path="/country" element={<Country />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
