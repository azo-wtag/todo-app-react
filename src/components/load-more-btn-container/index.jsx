import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import Button from "components/base/button";
import styles from "components/load-more-btn-container/index.module.scss";
import { loadMoreTask, showLessTasks } from "store/actions/filter";
import { CARD_PER_PAGE } from "utils/const";

function LoadMoreBtnContainer() {
  const dispatch = useDispatch();
  const numOfTotalTask = useSelector((state) => state.todo.tasks.length);
  const numOfVisibleTask = useSelector(
    (state) => state.filter.visibleCardCount
  );

  const handleLoadMoreBtnClick = () => {
    const numOfRemainingCard = numOfTotalTask - numOfVisibleTask;
    if (numOfRemainingCard >= CARD_PER_PAGE)
      dispatch(loadMoreTask(CARD_PER_PAGE));
    else dispatch(loadMoreTask(Math.abs(numOfRemainingCard)));
  };

  const loadMoreButtonClasses = classNames(styles.loadMoreBtn, {
    "d-none": numOfTotalTask === numOfVisibleTask,
  });
  const showLessButtonClasses = classNames({
    "d-none": numOfTotalTask > numOfVisibleTask,
  });

  return (
    <div className="flex justify-center">
      <Button
        className={loadMoreButtonClasses}
        onButtonClick={handleLoadMoreBtnClick}
      >
        Load More
      </Button>

      <Button
        className={showLessButtonClasses}
        onButtonClick={() => dispatch(showLessTasks())}
      >
        Show Less
      </Button>
    </div>
  );
}

export default LoadMoreBtnContainer;
