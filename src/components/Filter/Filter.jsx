import style from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
  resetFilters,
} from "../../redux/filter/slice";
import { fetchCatalogsCars } from "../../redux/catalog/operations";

import { selectBrands } from "../../redux/brands/selectors";
import Buttom from "../Buttom/Buttom";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/brands/operation";
import Selector from "../Select/Select";
import clsx from "clsx";
import SelectPrice from "../SelectPrice/SelectPrice";

export default function Filters() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  const filtersQuery = useSelector((state) => state.filters);

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

  const handleSearch = async () => {
    try {
      await dispatch(
        fetchCatalogsCars({ page: 1, filters: filtersQuery })
      ).unwrap();
      dispatch(resetFilters());
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const priceOptions = Array.from({ length: 8 }, (_, i) => {
    const value = 30 + i * 10;

    return {
      value,
      label: value.toString(),
    };
  });

  const handlePriceChange = (selected) => {
    dispatch(setRentalPrice(selected ? selected.value : ""));
  };

  return (
    <div className={style.filtersBlock}>
      <label className={style.label}>
        Car brand
        <Selector
          key={filtersQuery.brand || "brand"}
          options={brandOptions}
          value={
            filtersQuery.brand
              ? { value: filtersQuery.brand, label: filtersQuery.brand }
              : null
          }
          onChange={handleBrandChange}
          placeHolderValue="Choose a brand"
        />
      </label>
      <label className={style.label}>
        Price/ 1 hour
        <SelectPrice
          key={filtersQuery.rentalPrice || "price"}
          options={priceOptions}
          value={
            filtersQuery.rentalPrice
              ? {
                  value: filtersQuery.rentalPrice,
                  label: filtersQuery.rentalPrice,
                }
              : null
          }
          onChange={handlePriceChange}
          placeHolderValue="Choose a price"
          isPrice={true}
        />
      </label>

      <label className={clsx(style.label, style.labelMiles)}>
        Car mileage / km
        <div className={style.milesBlock}>
          <label
            className={clsx(style.inputLabelMiles, style.inputLabelMilesMin)}
          >
            From
            <input
              className={clsx(style.inputMiles)}
              type="text"
              value={filtersQuery.minMileage}
              onChange={(e) => dispatch(setMinMileage(e.target.value))}
            />
          </label>
          <label className={style.inputLabelMiles}>
            To
            <input
              className={style.inputMiles}
              type="text"
              value={filtersQuery.maxMileage}
              onChange={(e) => dispatch(setMaxMileage(e.target.value))}
            />
          </label>
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
