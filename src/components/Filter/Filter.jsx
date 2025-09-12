import style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setRentaPrice,
  setMinMileage,
  setMaxMileage,
} from "../../redux/filter/slice";
import { fetchCatalogsCars } from "../../redux/catalog/operations";
import { selectFiltersQuery } from "../../redux/filter/selectors";
import { selectBrands } from "../../redux/brands/selectors";
import Buttom from "../Buttom/Buttom";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/brands/operation";
import Select from "react-select";
import Selector from "../Select/Select";
import clsx from "clsx";

export default function Filters() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const filtersQuery = useSelector(selectFiltersQuery);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const brandOptions = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const handleBrandChange = (selectedOption) => {
    dispatch(setBrand(selectedOption ? selectedOption.value : ""));
  };

  const handleSearch = () => {
    dispatch(fetchCatalogsCars({ page: 1, filters: filtersQuery }));
  };

  const priceOptions = Array.from({ length: 8 }, (_, i) => {
    const value = 30 + i * 10; // 30, 40, 50 ... 100
    return { value, label: value.toString() };
  });

  return (
    <div className={style.filtersBlock}>
      <label className={style.label}>
        Car brand
        <Selector
          options={brandOptions}
          value={filtersQuery.brand}
          onChange={handleBrandChange}
          placeHolderValue="Choose a brand"
        />
      </label>
      <label className={style.label}>
        Price/ 1 hour
        <Selector
          options={priceOptions}
          value={filtersQuery.rentalPrice}
          onChange={(selected) =>
            dispatch(setRentaPrice(selected ? selected.value : ""))
          }
          placeHolderValue="Choose a price"
        />
      </label>

      <label className={clsx(style.label, style.labelMiles)}>
        Car mileage / km
        <div className={style.milesBlock}>
          <input
            className={clsx(style.inputMiles)}
            type="text"
            placeholder="From"
            onChange={(e) => dispatch(setMinMileage(e.target.value))}
          />
          <input
            className={style.inputMiles}
            type="text"
            placeholder="To"
            onChange={(e) => dispatch(setMaxMileage(e.target.value))}
          />
        </div>
      </label>

      <Buttom
        type="button"
        onClick={handleSearch}
        styleCss={style.btn}
        value="Search"
      />
    </div>
  );
}
