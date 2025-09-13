import clsx from "clsx";
import style from "./Icon.module.css";
import icons from "../../shared/sprite.svg";

export default function Icon({ styleCss, width, height, name, onClick }) {
  return (
    <>
      <svg
        className={clsx(style.icon, styleCss)}
        width={width}
        height={height}
        onClick={onClick}
      >
        <use href={`${icons}#icon-${name}`} />
      </svg>
    </>
  );
}
