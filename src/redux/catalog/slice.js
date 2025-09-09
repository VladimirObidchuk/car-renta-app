import { createSlice } from "@reduxjs/toolkit";

import { handleError, handlePending } from "../../utils/reduxUtils";
import { fetchCatalogsCars } from "./operations";

const catalogSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    page: 1,
    totalPages: 1,
    totalCars: 0,
    loading: false,
    error: null,
    isLoading: false,
  },
  reducers: {
    resetCatalogCars: (state) => {
      state.items = [];
      state.page = 1;
      state.error = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogsCars.pending, handlePending)
      .addCase(fetchCatalogsCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const data = action.payload.data || action.payload;
        state.items = data.cars;
        state.totalCars = action.payload.totalCars;
      })
      .addCase(fetchCatalogsCars.rejected, handleError);
  },
});

export default catalogSlice.reducer;
