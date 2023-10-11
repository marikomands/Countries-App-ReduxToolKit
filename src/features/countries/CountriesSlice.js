import { createSlice } from "@reduxjs/toolkit";
import {
  showAllCountries,
  searchByCode,
  searchByRegion,
} from "./CountriesAction";

const initialState = {
  loading: false,
  countriesData: [],
  countrySearched: [],
  region: "",
  searchTerm: "",
  success: false,
  error: false,
  message: "",
};

const CountriesSlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.countrySearched = [];
      state.success = false;
      state.error = false;
      state.message = "";
      state.region = "";
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
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
        state.countriesData = [];
      })
      .addCase(searchByCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.countrySearched = action.payload;
        state.success = true;
      })
      .addCase(searchByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countrySearched = [];
      })
      .addCase(searchByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchByRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.countriesData = action.payload;
        state.sucess = true;
      })
      .addCase(searchByRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
        state.countriesData = [];
      });
  },
});

export const { reset, setRegion, setSearchTerm } = CountriesSlice.actions;
export default CountriesSlice.reducer;
