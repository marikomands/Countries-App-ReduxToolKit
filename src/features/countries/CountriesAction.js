import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const showAllCountries = createAsyncThunk(
  "countries/showAll",
  async (_, thunkAPI) => {
    console.log("🚀 ~ showAllCountries:");
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log("🚀 ~ showAllCountries:", showAllCountries);
      console.log("🚀 ~ data:", data);
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
