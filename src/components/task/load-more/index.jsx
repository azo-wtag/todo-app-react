import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/base/button";
import styles from "./index.module.scss";
import { loadMoreTask } from "store/actions/filter";
import { CARD_PER_PAGE } from "utils/const";

function LoadMoreBtnContainer() {
  const dispatch = useDispatch();
  const totalTaskCount = useSelector((state) => state.todo.tasks.length);
  const visibleTaskCount = useSelector(
    (state) => state.filter.visibleCardCount
  );

  const handleLoadMoreBtnClick = () => {
    const nextPageCardCount =
      (totalTaskCount - visibleTaskCount) % CARD_PER_PAGE;
    if (nextPageCardCount >= 9) dispatch(loadMoreTask(9));
    else dispatch(loadMoreTask(nextPageCardCount));
  };

  return (
    <div className="flex justify-center">
      <Button
        className={styles.loadMoreBtn}
        onButtonClick={handleLoadMoreBtnClick}
      >
        Load More
      </Button>
    </div>
  );
}

export default LoadMoreBtnContainer;
