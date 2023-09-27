import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../features/countries/CountriesSlice";

const store = configureStore({
  reducer: { country: countriesReducer },
});

export default store;
