import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import Image from "components/base/image";
import { ALT_LOADER_TAG, PATH_LOADER_ICON } from "utils/const";
import styles from "components/base/loader/index.module.scss";

function Loader({ imageClassName, isLoading }) {
  if (!isLoading) return null;

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

const mapStateToProps = (state) => ({
  isDisabled: state.filter.isFiltering,
});

Loader.propTypes = {
  imageClassName: propTypes.string,
};

Loader.defaultProps = {
  imageClassName: "",
};

export default connect(mapStateToProps)(Loader);
