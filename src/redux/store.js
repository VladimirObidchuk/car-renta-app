import { configureStore } from "@reduxjs/toolkit";

import catalogReducer from "./catalog/slice";
import filtersReducer from "./filter/slice";
import brandsReducer from "./brands/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const catalogPersistConfig = {
  key: "catalog",
  storage,
};

export const store = configureStore({
  reducer: {
    catalog: persistReducer(catalogPersistConfig, catalogReducer),
    filters: filtersReducer,
    brands: brandsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persist = persistStore(store);
