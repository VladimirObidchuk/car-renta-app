import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <NavLink to="/">
      <Icon name="logo" classname={style.logoIcon} width={104} height={16} />
    </NavLink>
  );
}
