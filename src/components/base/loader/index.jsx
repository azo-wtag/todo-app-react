import React from "react";
import propTypes from "prop-types";

import Image from "components/base/image";
import { ALT_LOADER_TAG, PATH_LOADER_ICON } from "utils/const";
import styles from "components/base/loader/index.module.scss";

function Loader({ imageClassName }) {
  return (
    <div className={styles.loader}>
      <Image
        src={PATH_LOADER_ICON}
        alt={ALT_LOADER_TAG}
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
