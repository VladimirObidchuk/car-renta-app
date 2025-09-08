import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalogsCars } from "./catalogOps";

const handlePending = (state) => {
  state.loading = true;
};
const handleError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
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
        console.log(action.payload);
        state.items = action.payload;
        state.totalCars = action.payload.totalCars;
      })
      .addCase(fetchCatalogsCars.rejected, handleError);
  },
});

export default catalogSlice.reducer;
