import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import { selectCarsIsLoading } from "../../redux/catalog/selectors";
import Loader from "../../components/Loader/Loader";

import Filters from "../../components/Filter/Filter";

export default function CatalogPage() {
  const isLoading = useSelector(selectCarsIsLoading);
  return (
    <div className="container">
      <Filters />
      {isLoading ? <Loader /> : <CarsList />}
    </div>
  );
}
