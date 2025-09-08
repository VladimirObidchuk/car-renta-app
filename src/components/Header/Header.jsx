import style from "./Header.module.css";
import Logo from "../Logo/Logo";
import NavigationWrapper from "../NavigationWrapper/NavigationWrapper";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Logo />
        <NavigationWrapper />
      </div>
    </header>
  );
}
