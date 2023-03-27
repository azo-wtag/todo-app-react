import React from "react";

import Button from "components/base/button";
import styles from "./index.module.scss";

function LoadMoreBtnContainer() {
  return (
    <div className="flex justify-center">
      <Button className={styles.loadMoreBtn}>Load More</Button>
    </div>
  );
}

export default LoadMoreBtnContainer;
