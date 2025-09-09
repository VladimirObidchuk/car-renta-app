import { createSelector } from "@reduxjs/toolkit";

export const selectFilters = (state) => state.filters;

export const selectFiltersQuery = createSelector([selectFilters], (filters) => {
  const query = {};
  if (filters.brand) query.brand = filters.brand;
  if (filters.rentalPrice) query.rentalPrice = filters.rentalPrice;
  if (filters.minMileage) query.minMileage = filters.minMileage;
  if (filters.maxMileage) query.maxMileage = filters.maxMileage;
  return query;
});
