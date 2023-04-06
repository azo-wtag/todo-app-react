import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import {
  LOGO_ALT_TAG,
  LOGO_IMG_PATH,
  SEARCH_ICON_ALT_TAG,
  SEARCH_ICON_PATH,
} from "utils/const";

function NavBar() {
  return (
    <nav
      className={`container flex justify-between width-full mx-auto ${styles.navbar}`}
    >
      <div className="flex">
        <Image src={LOGO_IMG_PATH} alt={LOGO_ALT_TAG} />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src={SEARCH_ICON_PATH} alt={SEARCH_ICON_ALT_TAG} />
      </div>
    </nav>
  );
}

export default NavBar;
