import { render, screen } from "@testing-library/react";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { createClient } from "@supabase/supabase-js";
import rootReducer from "store/index";
import { asyncFunctionMiddleware } from "store/middleware";
import HomeContainer from "components/home-container";

jest.mock("@supabase/supabase-js", () => ({
  createClient: jest.fn(),
}));

const mockInsert = jest.fn();
const mockSupabase = {
  from: () => ({
    insert: mockInsert.mockReturnValue({ data: [{ id: 1 }] }),
  }),
};
createClient.mockReturnValue(mockSupabase);

test("should render no-task-found component if task length == 0", () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(asyncFunctionMiddleware)
  );

  render(
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );

  const noTaskFound = screen.getByAltText(/no task found icon/i);
  expect(noTaskFound).toBeInTheDocument();
});
