import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

const filtersCatalogReduser = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setRentalPrice: (state, action) => {
      state.rentalPrice = action.payload;
    },
    setMinMileage: (state, action) => {
      state.minMileage = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
    },
    resetFilters: () => initialState,
  },
});
export const {
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
  resetFilters,
} = filtersCatalogReduser.actions;

export default filtersCatalogReduser.reducer;
