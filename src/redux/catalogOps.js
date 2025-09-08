import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCatalogsCars = createAsyncThunk(
  "/catalogfetchCarsAll",
  async (_, thunkApi) => {
    try {
      const res = await axios.get("/cars");
      console.log("🚀 ~ res:", res);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
