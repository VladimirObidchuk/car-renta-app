import style from "./CarsList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectCarsIsLoading,
  selectCarsPage,
  selectTotalPages,
} from "../../redux/catalog/selectors";

import { useEffect } from "react";
import { selectFiltersQuery } from "../../redux/filter/selectors";
import { fetchCatalogsCars } from "../../redux/catalog/operations";
import CarItem from "../CarItem/CarItem";
import Buttom from "../Buttom/Buttom";
import NoResults from "../NoResults/NoResults";

export default function CarsList() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const totalPages = useSelector(selectTotalPages);
  const page = useSelector(selectCarsPage);
  const isLoading = useSelector(selectCarsIsLoading);

  const filters = useSelector(selectFiltersQuery);

  useEffect(() => {
    dispatch(fetchCatalogsCars({ page: 1, filters: {} }));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (!isLoading && page < totalPages) {
      dispatch(fetchCatalogsCars({ page: page + 1, filters }));
    }
  };
  if (!isLoading && cars.length === 0) {
    return <NoResults />;
  }
  return (
    <>
      {cars.length > 0 && (
        <ul className={style.content}>
          {cars.map((car) => (
            <li className={style.item} key={car.id}>
              <CarItem
                rentalCompany={car.rentalCompany}
                type={car.type}
                mileage={car.mileage}
                brand={car.brand}
                image={car.img}
                model={car.model}
                rentalPrice={car.rentalPrice}
                year={car.year}
                address={car.address}
                carId={car.id}
                car={car}
              />
            </li>
          ))}
        </ul>
      )}
      <div className={style.loadMore}>
        {page < totalPages && cars.length > 0 && (
          <Buttom
            value="Load more"
            onClick={handleLoadMore}
            styleCss={style.btnLoadMo}
          />
        )}
      </div>
    </>
  );
}
