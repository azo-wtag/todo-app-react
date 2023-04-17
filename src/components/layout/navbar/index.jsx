import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import { ALT_LOGO_TAG, PATH_LOGO_ICON } from "utils/const";
import SearchField from "components/base/search-field";

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
        <SearchField />
      </div>
    </nav>
  );
}

export default NavBar;
