import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api";

export const fetchBrands = createAsyncThunk("/brands", async (_, thunkApi) => {
  try {
    const res = await apiClient.get("/brands");
    return res.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
