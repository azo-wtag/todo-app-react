import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

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
    if (nextPageCardCount >= CARD_PER_PAGE)
      dispatch(loadMoreTask(CARD_PER_PAGE));
    else dispatch(loadMoreTask(nextPageCardCount));
  };

  const loadMoreButtonClasses = classNames(styles.loadMoreBtn, {
    "d-none": totalTaskCount === visibleTaskCount,
  });
  const showLessButtonClasses = classNames({
    "d-none": totalTaskCount > visibleTaskCount,
  });

  return (
    <div className="flex justify-center">
      <Button
        className={loadMoreButtonClasses}
        onButtonClick={handleLoadMoreBtnClick}
      >
        Load More
      </Button>

      <Button className={showLessButtonClasses}>Show Less</Button>
    </div>
  );
}

export default LoadMoreBtnContainer;
