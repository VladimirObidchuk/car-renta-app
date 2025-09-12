import { createSlice } from "@reduxjs/toolkit";

import { handleError, handlePending } from "../../utils/reduxUtils";
import { fetchCarsForId, fetchCatalogsCars } from "./operations";

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
    currentCar: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalogsCars.pending, handlePending)
      .addCase(fetchCatalogsCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const data = action.payload;
        if (Number(data.page) === 1) {
          state.items = data.cars;
        } else {
          state.items = [...state.items, ...data.cars];
        }
        state.totalCars = action.payload.totalCars;
        state.page = Number(data.page);
        state.totalPages = data.totalPages;
      })
      .addCase(fetchCatalogsCars.rejected, handleError)
      .addCase(fetchCarsForId.pending, handlePending)
      .addCase(fetchCarsForId.fulfilled, (state, { payload }) => {
        state.error = false;
        state.currentCar = payload;
      })
      .addCase(fetchCarsForId.rejected, handleError);
  },
});

export default catalogSlice.reducer;
