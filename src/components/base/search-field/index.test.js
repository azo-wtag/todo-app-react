import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import SearchField from "components/base/search-field";
import { asyncFunctionMiddleware } from "store/middleware";
import { CARD_PER_PAGE, TASK_FILTER_ALL } from "utils/const";
import { SET_SEARCH_KEY } from "store/constants/actionTypes";

describe("<SearchBar />", () => {
  test("should toogle search-field visibility on search button click", async () => {
    const initialState = {
      filter: {
        visibleCardCount: CARD_PER_PAGE,
        filteredCardState: TASK_FILTER_ALL,
        searchKey: "",
        isFiltering: false,
        isLoading: true,
      },
    };
    const mockStore = configureStore([asyncFunctionMiddleware]);
    const store = mockStore(initialState);

    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <SearchField />
      </Provider>
    );

    const searchBtn = screen.getByRole("button", { name: /task search icon/i });
    const nullSearchInput = screen.queryByRole("textbox");
    expect(nullSearchInput).not.toBeInTheDocument();

    await act(async () => {
      await user.click(searchBtn);
    });

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
  });

  test("should call debounce function once while searching tasks", async () => {
    const initialState = {
      filter: {
        visibleCardCount: CARD_PER_PAGE,
        filteredCardState: TASK_FILTER_ALL,
        searchKey: "",
        isFiltering: false,
        isLoading: true,
      },
    };
    const mockStore = configureStore([asyncFunctionMiddleware]);
    const store = mockStore(initialState);

    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <SearchField />
      </Provider>
    );
    const searchBtn = screen.getByRole("button", { name: /task search icon/i });
    await act(async () => {
      await user.click(searchBtn);
    });
    const searchInput = screen.getByRole("textbox");

    await act(async () => {
      await user.type(searchInput, "task");
    });
    expect(searchInput).toHaveValue("task");

    await new Promise((r) => setTimeout(r, 800));
    const actions = store.getActions();
    console.log(actions);
    expect(
      actions.filter((action) => action.type === SET_SEARCH_KEY).length
    ).toBe(1);
  });
});
