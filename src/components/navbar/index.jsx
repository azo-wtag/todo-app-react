import React from "react";
import Image from "components/base/image";
import {
  ALT_TAG_ICON_SEARCH,
  ALT_TAG_LOGO,
  ICON_LOGO,
  ICON_SEARCH,
} from "utils/const";
import styles from "components/navbar/index.module.scss";

function NavBar() {
  return (
    <nav
      className={`home-container flex justify-between width-full mx-auto ${styles.navbar}`}
    >
      <div className="flex">
        <Image src={ICON_LOGO} alt={ALT_TAG_LOGO} />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src={ICON_SEARCH} alt={ALT_TAG_ICON_SEARCH} />
      </div>
    </nav>
  );
}

export default NavBar;
