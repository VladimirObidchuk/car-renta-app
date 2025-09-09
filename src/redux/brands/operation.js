import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api";

export const fetchBrands = createAsyncThunk("/brands", async (_, thunkApi) => {
  try {
    const res = apiClient.get("/brands");
    console.log("🚀 ~ res:", res);
    return res.data;
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});
