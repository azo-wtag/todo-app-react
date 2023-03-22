import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import { LOGO_ALT_TAG, SEARCH_ICON_ALT_TAG } from "utils/const/images";

function NavBar() {
  return (
    <nav
      className={`container flex justify-between width-100 mx-auto ${styles.navbar}`}
    >
      <div className="flex">
        <Image src="logo.png" alt={LOGO_ALT_TAG} />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src="search.png" alt={SEARCH_ICON_ALT_TAG} />
      </div>
    </nav>
  );
}

export default NavBar;
