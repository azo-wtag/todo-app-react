import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import { ALT_LOGO_TAG, ICON_LOGO } from "utils/const";
import SearchField from "components/base/search-field";

function NavBar() {
  return (
    <nav
      className={`home-container flex flex-col flex-md-row justify-between width-full mx-auto ${styles.navbar}`}
    >
      <div className={`flex ${styles.logoContainer}`}>
        <Image src={ICON_LOGO} alt={ALT_LOGO_TAG} />
        <h1 className={styles.heading}>Todos</h1>
      </div>

      <SearchField />
    </nav>
  );
}

export default NavBar;
