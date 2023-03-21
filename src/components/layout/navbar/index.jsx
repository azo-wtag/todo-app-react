import React from "react";
import Styles from "./index.module.scss";
import Image from "components/base/image";

function NavBar() {
  return (
    <nav
      className={`container flex justify-between width-100 mx-auto ${Styles.navbar}`}
    >
      <div className="flex">
        <Image src="logo.png" alt="todo app logo" />
        <h1>Todos</h1>
      </div>

      <div>
        <Image src="search.png" alt="task search icon" />
      </div>
    </nav>
  );
}

export default NavBar;
