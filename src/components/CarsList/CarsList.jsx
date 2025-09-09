import style from "./CarsList.module.css";
import { useDispatch, useSelector } from "react-redux";
// import {
//     selectCars,
//     selectTotalCars,
//     selectTotalPages,
// } from "../../redux/catalog/selectors";
// import { selectBrands } from "../../redux/brands/selectors";
import { useEffect } from "react";
import { selectFiltersQuery } from "../../redux/filter/selectors";
import { fetchCatalogsCars } from "../../redux/catalog/operations";

export default function CarsList() {
  const dispatch = useDispatch();
  //   const cars = useSelector(selectCars);
  //   const totalCars = useSelector(selectTotalCars);
  //   const totalPages = useSelector(selectTotalPages);
  //   const brands = useSelector(selectBrands);
  const filters = useSelector(selectFiltersQuery);

  useEffect(() => {
    dispatch(fetchCatalogsCars(filters));
  }, [dispatch, filters]);

  return <ul className={style.container}>CarsList</ul>;
}
