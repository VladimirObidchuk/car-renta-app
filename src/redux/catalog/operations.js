import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api";

export const fetchCatalogsCars = createAsyncThunk(
  "/catalogfetchCarsAll",
  async ({ page = 1, filters = {} }, thunkApi) => {
    try {
      const res = await apiClient.get("/cars", {
        params: { page, ...filters },
      });
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchCarsForId = createAsyncThunk(
  "/fetchCarForId",
  async (carId, thunkApi) => {
    try {
      const res = await apiClient.get(`/cars/${carId}`);
      return res.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
