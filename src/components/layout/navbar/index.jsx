import React from "react";
import styles from "components/layout/navbar/index.module.scss";
import Image from "components/base/image";
import { LOGO_ALT_TAG, LOGO_IMG_PATH } from "utils/const";
import SearchField from "components/base/search-field";

function NavBar() {
  return (
    <nav
      className={`home-container flex flex-col flex-md-row justify-between width-full mx-auto ${styles.navbar}`}
    >
      <div className={`flex ${styles.logoContainer}`}>
        <Image src={LOGO_IMG_PATH} alt={LOGO_ALT_TAG} />
        <h1 className={styles.heading}>Todos</h1>
      </div>

      <SearchField />
    </nav>
  );
}

export default NavBar;
