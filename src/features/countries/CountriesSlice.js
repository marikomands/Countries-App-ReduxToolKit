import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries } from "./CountriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  countryData: [],
  success: false,
  error: false,
  message: "",
};

const CountriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(showAllCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(showAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.success = true;
      })
      .addCase(showAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.counrtiesData = [];
      });
  },
});

export default CountriesSlice.reducer;
