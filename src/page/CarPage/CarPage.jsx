import { useParams } from "react-router-dom";
import style from "./CarPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsForId } from "../../redux/catalog/operations";
import { selectCarForId } from "../../redux/catalog/selectors";

export default function CarPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectCarForId);
  useEffect(() => {
    dispatch(fetchCarsForId(id));
  }, [dispatch, id]);

  console.log("🚀 ~ car:", car);

  return (
    <div className={style.content}>
      <div className={style.leftSide}></div>
      <div className={style.rightSide}></div>
    </div>
  );
}
