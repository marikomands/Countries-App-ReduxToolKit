import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchByCode } from "../../features/countries/CountriesAction";
import "./CountryDetails.css";

export default function CountryDetails() {
  const { error, countrySearched } = useSelector((state) => state.country);
  console.log("🚀 ~ CountryDetails ~ countrySearched:", countrySearched);
  const dispatch = useDispatch();

  const { code } = useParams();

  useEffect(() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, code, error]);

  return (
    <div>
      <div className="link-container">
        <Link className="back-button" to="/">
          <i className="fa-solid fa-arrow-left"></i>
          Back
        </Link>
      </div>
      {countrySearched.length > 0 ? (
        <div className="country-container">
          <div>
            <img
              src={countrySearched[0].flags.png}
              alt={countrySearched[0].flags.alt}
            />
          </div>
          <div className="country-detail-leftt">
            <p>Name: {countrySearched[0].name.common}</p>
            <p>Offical Name:{countrySearched[0].name.official} </p>
            <p>Population:{countrySearched[0].population}</p>
            <p>Region:{countrySearched[0].region}</p>
            <p>Sub Region:{countrySearched[0].subregion}</p>
            <p>Capital: {countrySearched[0].capital}</p>
          </div>
          <div className="country-detail-right">
            <p>Top Level Domen: {countrySearched[0].tld[0]}</p>
            <p>
              Currency:
              {Object.values(countrySearched[0].currencies)
                .map((currency) => currency.name)
                .join(",")}
            </p>
            <p>
              Language:
              {Object.values(countrySearched[0].languages)
                .map((language) => language)
                .join(",")}
            </p>
          </div>
          <div className="border-container">
            <p>Border Countries:</p>

            {countrySearched[0].borders ? (
              countrySearched[0].borders.map((border) => {
                return (
                  <Link className="border-name" to={`/${border}`}>
                    <p> {border}</p>
                  </Link>
                );
              })
            ) : (
              <span>No Boarders</span>
            )}
          </div>
        </div>
      ) : (
        <div>No details</div>
      )}
    </div>
  );
}
