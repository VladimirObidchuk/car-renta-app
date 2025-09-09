import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operation";
import { handleError, handlePending } from "../../utils/reduxUtils";

const catalogBrands = createSlice({
  name: "brands",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchBrands.rejected, handleError);
  },
});

export default catalogBrands.reducer;
