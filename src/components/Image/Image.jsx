import clsx from "clsx";
import style from "./Image.module.css";

export default function Image({ path, alt, width, height, styleCss }) {
  return (
    <>
      <img
        src={path}
        alt={alt}
        width={width}
        height={height}
        className={clsx(style.image, styleCss)}
      />
    </>
  );
}
