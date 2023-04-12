import React from "react";
import Image from "components/base/image";
import { LOADER_ALT_TAG, LOADER_IMG_PATH } from "utils/const";
import styles from "components/base/loader/index.module.scss";

function Loader() {
  return (
    <div className={styles.loader}>
      <Image
        src={LOADER_IMG_PATH}
        alt={LOADER_ALT_TAG}
        className={styles.icon}
      />
    </div>
  );
}

export default Loader;
