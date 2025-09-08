import NavigationLinks from "../NavigationLinks/NavigationLinks";
import style from "./NavigationWrapper.module.css";

import React from "react";

export default function NavigationWrapper() {
  return (
    <nav className={style.container}>
      <NavigationLinks />
    </nav>
  );
}
