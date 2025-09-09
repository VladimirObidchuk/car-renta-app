import NavigationLinks from "../NavigationLinks/NavigationLinks";
import style from "./NavigationWrapper.module.css";

export default function NavigationWrapper() {
  return (
    <nav className={style.container}>
      <NavigationLinks />
    </nav>
  );
}
