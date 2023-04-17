import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import {
  ALT_LOGO_ALT_TAG,
  ALT_LOGO_IMG_TAG,
  ALT_SEARCH_ICON_TAG,
  PATH_SEARCH_ICON,
} from "utils/const";

function NavBar() {
  return (
    <nav
      className={`home-container flex justify-between width-full mx-auto ${styles.navbar}`}
    >
      <div className="flex">
        <Image src={ALT_LOGO_IMG_TAG} alt={ALT_LOGO_ALT_TAG} />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src={PATH_SEARCH_ICON} alt={ALT_SEARCH_ICON_TAG} />
      </div>
    </nav>
  );
}

export default NavBar;
