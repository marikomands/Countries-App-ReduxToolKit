import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  showAllCountries,
  searchByRegion,
} from "../../features/countries/CountriesAction";
import "./Country.css";

const Country = () => {
  const { countriesData, success, loading, error, region, searchTerm } =
    useSelector((state) => state.country);
  console.log("🚀 ~ Country ~ searchTerm:", searchTerm);
  console.log("🚀 ~ Country ~ countriesData:", countriesData);

  const data = countriesData.filter((country) =>
    country.name.common.includes(searchTerm)
  );
  console.log("🚀 ~ Country ~ data:", data);
  console.log("🚀 ~ Country ~ searchTerm:", searchTerm);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("🚀 ~ useEffect ~ showAllCountries:", showAllCountries);
    dispatch(showAllCountries());

    if (region) {
      dispatch(searchByRegion(region));
    }

    if (error) {
      // console.log(error);
    }
  }, [dispatch, error, region]);

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.length > 0 &&
        data.map((countryData, index) => {
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
