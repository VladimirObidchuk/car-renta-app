import { useParams } from "react-router-dom";
import style from "./CarPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsForId } from "../../redux/catalog/operations";
import { selectCarForId } from "../../redux/catalog/selectors";
import Image from "../../components/Image/Image";
import clsx from "clsx";
import Icon from "../../components/Icon/Icon";
import CarInfo from "../../components/CarInfo/CarInfo";
import BookingForm from "../../components/BookingForm/BookingForm";

export default function CarPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const car = useSelector(selectCarForId);
  const {
    img,
    model,
    brand,
    address,
    rentalPrice,
    description,
    year,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
  } = car || {};
  useEffect(() => {
    dispatch(fetchCarsForId(id));
  }, [dispatch, id]);

  const addresArg = address.split(",");
  const coutry = addresArg[2];
  const city = addresArg[1];

  const specifications = [
    {
      label: "Year:",
      value: year,
      icon: "calendar",
    },
    {
      label: "Type:",
      value: type,
      icon: "car",
    },
    {
      label: "Fuel Consumption:",
      value: fuelConsumption,
      icon: "fuel-pump",
    },
    {
      label: "Engine Size:",
      value: engineSize,
      icon: "gear",
    },
  ];

  const functionAccessor = (accessories || []).concat(functionalities || []);

  return (
    <div className={clsx("container", style.content)}>
      <div className={style.leftSide}>
        <div className={style.leftSideTop}>
          <Image
            path={img}
            alt={`${brand} ${model}`}
            width={640}
            height={512}
            styleCss={style.imgLeftSide}
          />
        </div>
        <div className={style.leftSideBottom}>
          <BookingForm carId={id} />
        </div>
      </div>
      <div className={style.rightSide}>
        <div className={style.detail}>
          <ul className={style.detailTop}>
            <li className={clsx(style.detailItem, style.detailTitle)}>
              <h3 className={style.titleDetails}>{brand}</h3>
              <h3 className={style.titleDetails}>{model},</h3>
              <h3 className={style.titleDetails}>{year}</h3>
            </li>
            <li className={clsx(style.detailItem, style.detailLocation)}>
              <Icon
                styleCss={style.icon}
                name="location"
                width={16}
                height={16}
              />
              <p className={style.locationItem}>{`${coutry},${city}`}</p>
              <p className={clsx(style.locationItem, style.locationItenMileag)}>
                Mileage: {car.mileage.toLocaleString("uk-UA")} km
              </p>
            </li>
            <li className={clsx(style.detailItem, style.renteItem)}>
              ${rentalPrice}
            </li>
          </ul>
          <div className={style.detailBottom}>
            <p className={style.detailsText}>{description}</p>
          </div>
        </div>
        <div className={style.carInfo}>
          <CarInfo
            title="Rental Conditions:"
            detailsCar={rentalConditions}
            width={16}
            height={16}
            nameIcon="check-circle"
          />
          <CarInfo
            title="Car Specifications:"
            width={16}
            height={16}
            detailsCar={specifications}
          />
          <CarInfo
            title="Accessories and functionalities:"
            detailsCar={functionAccessor}
            width={16}
            height={16}
            nameIcon="check-circle"
          />
        </div>
      </div>
    </div>
  );
}
