import rootReducer from "store/index";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { asyncFunctionMiddleware } from "store/middleware";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoadMoreBtnContainer from ".";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

test("load", async () => {
  const user = userEvent.setup();
  const store = createStore(
    rootReducer,
    applyMiddleware(asyncFunctionMiddleware)
  );

  render(
    <Provider store={store}>
      <LoadMoreBtnContainer numOfTotalTask={30} />
    </Provider>
  );
  expect(store.getState().filter.visibleCardCount).toBe(9);

  const loadMoreBtn = screen.getByRole("button", { name: /load more/i });
  const showLessBtn = screen.getByRole("button", { name: /show less/i });

  expect(loadMoreBtn).not.toHaveClass("d-none");
  expect(showLessBtn).toHaveClass("d-none");

  await act(async () => {
    await user.click(loadMoreBtn);
  });
  expect(store.getState().filter.visibleCardCount).toBe(18);

  expect(loadMoreBtn).not.toHaveClass("d-none");
  expect(showLessBtn).toHaveClass("d-none");

  await act(async () => {
    await user.click(loadMoreBtn);
    await user.click(loadMoreBtn);
    await user.click(loadMoreBtn);
  });

  expect(loadMoreBtn).toHaveClass("d-none");
  expect(showLessBtn).not.toHaveClass("d-none");
});