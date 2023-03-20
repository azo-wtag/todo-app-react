import React from "react";
import Image from "../../base/image";
import Styles from "./index.module.scss";

function NavBar() {
  return (
    <nav
      className={`container flex justify-between width-100 mx-auto ${Styles.navbar}`}
    >
      <div className="flex">
        <Image src="logo.png" alt="logo" />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src="search.png" alt="search" />
      </div>
    </nav>
  );
}

export default NavBar;
