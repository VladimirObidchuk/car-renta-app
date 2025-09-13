import Icon from "../Icon/Icon";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <Icon name="logo" classname={style.logoIcon} width={104} height={16} />
    </div>
  );
}
