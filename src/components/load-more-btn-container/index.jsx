import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import propTypes from "prop-types";

import Button from "components/base/button";
import styles from "components/load-more-btn-container/index.module.scss";
import {
  loadMoreTask,
  resetVisibleTaskCount,
  showLessTasks,
} from "store/actions/filter";
import { CARD_PER_PAGE } from "utils/const";

function LoadMoreBtnContainer({ numOfTotalTask }) {
  const dispatch = useDispatch();
  const numOfVisibleTask = useSelector(
    (state) => state.filter.visibleCardCount
  );

  function handleLoadMoreClick() {
    const numOfRemainingCard = numOfTotalTask - numOfVisibleTask;
    if (numOfRemainingCard >= CARD_PER_PAGE) {
      dispatch(loadMoreTask(CARD_PER_PAGE));
    } else {
      dispatch(loadMoreTask(Math.abs(numOfRemainingCard)));
    }
  }

  function handleShowLessClick() {
    dispatch(showLessTasks());
  }

  useEffect(() => {
    if (numOfTotalTask < numOfVisibleTask) {
      dispatch(resetVisibleTaskCount(numOfTotalTask));
    }
  }, []);

  const loadMoreButtonClasses = classNames(styles.loadMoreBtn, "fw-500", {
    "d-none": numOfTotalTask <= numOfVisibleTask,
  });
  const showLessButtonClasses = classNames(styles.showLessBtn, {
    "d-none": numOfVisibleTask < numOfTotalTask,
  });

  if (numOfTotalTask <= CARD_PER_PAGE) {
    return null;
  }

  return (
    <div className="flex justify-center">
      <Button className={loadMoreButtonClasses} onClick={handleLoadMoreClick}>
        Load More
      </Button>

      <Button className={showLessButtonClasses} onClick={handleShowLessClick}>
        Show Less
      </Button>
    </div>
  );
}

LoadMoreBtnContainer.propTypes = {
  numOfTotalTask: propTypes.number.isRequired,
};

export default LoadMoreBtnContainer;
