import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { showAllCountries } from "../../features/countries/CountriesAction";
import "./Country.css";

const Country = () => {
  const [countryData, setCountryData] = useState([]);
  console.log("🚀 ~ Countries ~ countryData:", countryData);

  const { countriesData, success, loading, error } = useSelector(
    (state) => state.countries
  );

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ showAllCountries:", showAllCountries);
    dispatch(showAllCountries());

    if (success) {
      setCountryData(countriesData);
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        countryData.length > 0 &&
        countryData.map((countryData, index) => {
          return (
            <Link
              className="country-card"
              key={index}
              to={`/${countryData.cca2}`}
            >
              <img
                src={countryData.flags.png}
                alt={countryData.flags.alt}
                className="country-images"
              />
              <div className="country-content">
                <h3>{countryData.name.common}</h3>
                <p>Population: {countryData.population}</p>
                <p>Region: {countryData.region}</p>
                <p>Capital: {countryData.capital}</p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;
