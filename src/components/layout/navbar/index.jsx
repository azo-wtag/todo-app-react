import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import {
  ALT_LOGO_TAG,
  ICON_LOGO,
  ALT_SEARCH_ICON_TAG,
  ICON_SEARCH,
} from "utils/const";

function NavBar() {
  return (
    <nav
      className={`home-container flex justify-between width-full mx-auto ${styles.navbar}`}
    >
      <div className="flex">
        <Image src={ICON_LOGO} alt={ALT_LOGO_TAG} />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src={ICON_SEARCH} alt={ALT_SEARCH_ICON_TAG} />
      </div>
    </nav>
  );
}

export default NavBar;
