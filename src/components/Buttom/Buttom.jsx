import clsx from "clsx";
import style from "./Buttom.module.css";

export default function Buttom({ type, onClick, value, styleCss }) {
  return (
    <button type={type} onClick={onClick} className={clsx(style.btn, styleCss)}>
      {value}
    </button>
  );
}
