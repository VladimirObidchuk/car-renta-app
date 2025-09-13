import Icon from "../Icon/Icon";
import style from "./CarInfo.module.css";

export default function CarInfo({
  detailsCar = [],
  title,
  nameIcon,
  width,
  height,
}) {
  if (!detailsCar.length) return null;
  return (
    <div className={style.wrapper}>
      <h4 className={style.rentalConditionsTitle}>{title}</h4>
      <ul className={style.rentalConditions}>
        {detailsCar.map((item, index) => {
          if (typeof item === "string") {
            return (
              <li className={style.rentalConditionsItem} key={index}>
                <Icon width={width} height={height} name={nameIcon} />
                <p className={style.rentaConditionText}>{item}</p>
              </li>
            );
          }

          return (
            <li className={style.rentalConditionsItem} key={index}>
              <Icon width={width} height={height} name={item.icon} />
              <p className={style.rentaConditionText}>
                <strong>{item.label}:</strong> {item.value}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
