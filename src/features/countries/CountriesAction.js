import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (_, thunkAPI) => {
    console.log("🚀 ~ showAllCountries:");
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log("🚀 ~ showAllCountries:", showAllCountries);
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const searchByCode = createAsyncThunk(
  "countries/searchByCode",
  async (code, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      console.log("🚀 ~ searchByCode:", searchByCode);
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const searchByRegion = createAsyncThunk(
  "countries/searchByRegion",
  async (region, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
