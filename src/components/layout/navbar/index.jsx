import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import {
  PATH_LOGO_ICON,
  ALT_SEARCH_ICON_TAG,
  PATH_SEARCH_ICON,
  ALT_LOGO_TAG,
} from "utils/const";

function NavBar() {
  return (
    <nav
      className={`home-container flex justify-between width-full mx-auto ${styles.navbar}`}
    >
      <div className="flex">
        <Image src={PATH_LOGO_ICON} alt={ALT_LOGO_TAG} />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src={PATH_SEARCH_ICON} alt={ALT_SEARCH_ICON_TAG} />
      </div>
    </nav>
  );
}

export default NavBar;
