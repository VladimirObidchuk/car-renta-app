import clsx from "clsx";

export default function Buttom({ type, onClick, value, styleCss }) {
  return (
    <button type={type} onClick={onClick} className={clsx("btn", styleCss)}>
      {value}
    </button>
  );
}
