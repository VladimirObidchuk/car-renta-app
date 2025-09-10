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
    setRentaPrice: (state, action) => {
      state.rentaPrice = action.payload;
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
  setRentaPrice,
  setMinMileage,
  setMaxMileage,
  resetFilters,
} = filtersCatalogReduser.actions;

export default filtersCatalogReduser.reducer;
