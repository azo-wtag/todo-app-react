import React from "react";
import propTypes from "prop-types";

import Image from "components/base/image";
import { LOADER_ALT_TAG, LOADER_IMG_PATH } from "utils/const";
import styles from "components/base/loader/index.module.scss";

function Loader({ imageClassName }) {
  return (
    <div className={styles.loader}>
      <Image
        src={LOADER_IMG_PATH}
        alt={LOADER_ALT_TAG}
        className={`${styles.icon} ${imageClassName}`}
      />
    </div>
  );
}

Loader.propTypes = {
  imageClassName: propTypes.string,
};

Loader.defaultProps = {
  imageClassName: "",
};

export default Loader;
