import { createSlice } from "@reduxjs/toolkit";

const filtersCatalogReduser = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default filtersCatalogReduser.reducer;
