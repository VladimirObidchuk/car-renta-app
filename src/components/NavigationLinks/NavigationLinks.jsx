import clsx from "clsx";
import style from "./NavigationLinks.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationLinks({ onClick }) {
  const getActiveLinckClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.isActive);
  };
  return (
    <>
      <NavLink to="/" className={getActiveLinckClass} onClick={onClick}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={getActiveLinckClass} onClick={onClick}>
        Catalog
      </NavLink>
    </>
  );
}
