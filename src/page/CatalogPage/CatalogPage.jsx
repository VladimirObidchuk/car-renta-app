import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import { selectCarsIsLoading } from "../../redux/catalog/selectors";
import Loader from "../../components/Loader/Loader";

import style from "./CatalogPage.module.css";
import Filters from "../../components/Filter/Filter";

export default function CatalogPage() {
  const isLoading = useSelector(selectCarsIsLoading);
  return (
    <div className="container">
      <div className={style.filter}>
        <Filters />
      </div>
      {isLoading ? <Loader /> : <CarsList />}
    </div>
  );
}
