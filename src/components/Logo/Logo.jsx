import Icon from "../../shared/Icon";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <div>
      <Icon name="logo" classname={style.logoIcon} />
    </div>
  );
}
