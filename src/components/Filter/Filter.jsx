import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setRentaPrice,
  setMinMileage,
  setMaxMileage,
  resetFilters,
} from "../../redux/filter/slice";
import { fetchCatalogsCars } from "../../redux/catalog/operations";
import { selectFiltersQuery } from "../../redux/filter/selectors";
import { selectBrands } from "../../redux/brands/selectors";

export default function Filters() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const filtersQuery = useSelector(selectFiltersQuery);

  const handleSearch = () => {
    dispatch(fetchCatalogsCars(filtersQuery));
  };

  return (
    <div>
      <select
        value={filtersQuery.brand || ""}
        onChange={(e) => dispatch(setBrand(e.target.value))}
      >
        <option value="">All brands</option>
        {brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Max price"
        onChange={(e) => dispatch(setRentaPrice(e.target.value))}
      />

      <input
        type="text"
        placeholder="Min mileage"
        onChange={(e) => dispatch(setMinMileage(e.target.value))}
      />

      <input
        type="text"
        placeholder="Max mileage"
        onChange={(e) => dispatch(setMaxMileage(e.target.value))}
      />

      <button onClick={handleSearch}>Search</button>
      <button onClick={() => dispatch(resetFilters())}>Clear</button>
    </div>
  );
}
