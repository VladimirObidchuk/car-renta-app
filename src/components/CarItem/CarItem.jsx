import clsx from "clsx";
import style from "./CarItem.module.css";
import { NavLink } from "react-router-dom";

export default function CarItem({
  rentalCompany,
  type,
  mileage,
  brand,
  image,
  model,
  rentalPrice,
  year,
  address,
  carId,
}) {
  const addresArg = address.split(",");
  const coutry = addresArg[2];
  const city = addresArg[1];

  return (
    <div className={style.card}>
      <div className={style.imgCar}>
        <img src={image} alt={`${model} ${brand}`} className={style.img} />
        <div className={style.gradientOverlay}></div>
      </div>
      <div className={style.content}>
        <div className={style.titleContent}>
          <div className={style.leftSide}>
            <div className={style.topSide}>
              <h3 className={style.title}>{brand}</h3>
              <h3 className={clsx(style.title, style.titleModel)}>
                {model}
                <span>,</span>
              </h3>
              <h3 className={style.title}>{year}</h3>
            </div>
            <div className={style.bottomSide}>
              <div className={style.top}>
                <p className={style.descText}>{city}</p>
                <span>|</span>
                <p className={style.descText}>{coutry}</p>
                <span>|</span>
                <p className={style.descText}>{rentalCompany}</p>
                <span>|</span>
              </div>
              <div className={style.bottom}>
                <p className={style.descText}>{type}</p>
                <span>|</span>
                <p className={style.descText}>
                  {mileage.toLocaleString("uk-UA")} km
                </p>
              </div>
            </div>
          </div>
          <div className={style.rightSide}>
            <h3 className={clsx(style.title, style.renta)}>${rentalPrice}</h3>
          </div>
        </div>

        <NavLink className={clsx("btn", style.btn)} to={`/catalog/${carId}`}>
          Read more
        </NavLink>
      </div>
    </div>
  );
}
