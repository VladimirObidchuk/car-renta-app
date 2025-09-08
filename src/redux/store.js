import { configureStore } from "@reduxjs/toolkit";

import catalogReducer from "./catalogSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filters: filtersReducer,
  },
});
