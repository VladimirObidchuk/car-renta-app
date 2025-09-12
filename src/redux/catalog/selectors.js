export const selectCars = (state) => state.catalog.items;
export const selectCarsIsLoading = (state) => state.catalog.isLoading;
export const selectTotalCars = (state) => state.catalog.totalCars;
export const selectCarsPage = (state) => state.catalog.page;
export const selectTotalPages = (state) => state.catalog.totalPages;
export const selectCarsError = (state) => state.catalog.error;
export const selectCarForId = (state) => state.catalog.currentCar;
