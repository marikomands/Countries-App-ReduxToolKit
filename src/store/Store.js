import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/CountriesSlice";

const store = configureStore({
  reducer: { countries: countriesReducer },
});

export default store;
