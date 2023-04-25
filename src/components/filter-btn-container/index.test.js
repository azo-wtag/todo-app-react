import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import userEvent from "@testing-library/user-event";
import rootReducer from "store/index";
import { asyncFunctionMiddleware } from "store/middleware";
import FilterBtnContainer from "components/filter-btn-container";
import {
  TASK_FILTER_ALL,
  TASK_FILTER_COMPLETED,
  TASK_FILTER_INCOMPLETED,
} from "utils/const";

test("should update the filter status inside redux state", async () => {
  const user = userEvent.setup();
  const store = createStore(
    rootReducer,
    applyMiddleware(asyncFunctionMiddleware)
  );

  render(
    <Provider store={store}>
      <FilterBtnContainer />
    </Provider>
  );

  const filterAllBtn = screen.getByRole("button", { name: /all/i });
  const filterCompleteBtn = screen.getByRole("button", { name: /^complete$/i });
  const filterInCompleteBtn = screen.getByRole("button", {
    name: /incomplete/i,
  });

  expect(filterAllBtn).toBeInTheDocument();
  expect(filterCompleteBtn).toBeInTheDocument();
  expect(filterInCompleteBtn).toBeInTheDocument();

  await act(async () => {
    await user.click(filterAllBtn);
  });
  expect(store.getState().filter.filteredCardState).toBe(TASK_FILTER_ALL);

  await act(async () => {
    await user.click(filterCompleteBtn);
  });
  expect(store.getState().filter.filteredCardState).toBe(TASK_FILTER_COMPLETED);

  await act(async () => {
    await user.click(filterInCompleteBtn);
  });
  expect(store.getState().filter.filteredCardState).toBe(
    TASK_FILTER_INCOMPLETED
  );
});
