import style from "./Header.module.css";
import Logo from "../Logo/Logo";
import NavigationWrapper from "../NavigationWrapper/NavigationWrapper";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={clsx("container", style.container)}>
        <Logo />
        <NavigationWrapper />
      </div>
    </header>
  );
}
