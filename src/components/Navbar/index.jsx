import React from "react";
import Image from "components/Common/Image";
import {
  ICON_LOGO,
  ALT_TAG_LOGO,
  ICON_SEARCH,
  ALT_TAG_ICON_SEARCH,
} from "utils/const/images";
import styles from "components/Navbar/index.module.scss";

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
