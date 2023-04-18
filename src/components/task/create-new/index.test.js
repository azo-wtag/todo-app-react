import { act, render, screen } from "@testing-library/react";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "store/index";
import CreateTask from "components/task/create-new";
import { ALT_DELETE_ICON_TAG } from "utils/const";

jest.mock("@supabase/supabase-js", () => ({
  createClient: jest.fn(),
}));

test("should render form fields", () => {
  const mockInsert = jest.fn();
  const mockSupabase = {
    from: () => ({
      insert: mockInsert.mockReturnValue({ data: [{ id: 1 }] }),
    }),
  };
  createClient.mockReturnValue(mockSupabase);

  const mockSuccessEntry = jest.fn();
  const mockDelete = jest.fn();

  render(
    <Provider store={createStore(rootReducer)}>
      <CreateTask
        onSuccessfullTaskEntry={mockSuccessEntry}
        onDelete={mockDelete}
      />
    </Provider>
  );

  const taskTitle = screen.getByRole("textbox");
  expect(taskTitle).toBeInTheDocument();
  const addTaskBtn = screen.getByRole("button", { name: /add task/i });
  expect(addTaskBtn).toBeInTheDocument();
  const deleteTaskIcon = screen.getByRole("img", { name: ALT_DELETE_ICON_TAG });
  expect(deleteTaskIcon).toBeInTheDocument();
});

test("should validate form fields", async () => {
  const mockInsert = jest.fn();
  const mockSupabase = {
    from: () => ({
      insert: mockInsert.mockReturnValue({ data: [{ id: 1 }] }),
    }),
  };
  createClient.mockReturnValue(mockSupabase);

  const mockSuccessEntry = jest.fn();
  const mockDelete = jest.fn();

  const user = userEvent.setup();
  render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <CreateTask
        onSuccessfullTaskEntry={mockSuccessEntry}
        onDelete={mockDelete}
      />
    </Provider>
  );

  const taskTitleInput = screen.getByRole("textbox");
  const addTaskButton = screen.getByRole("button", { name: /add task/i });

  await act(async () => {
    await user.type(taskTitleInput, "  ");
    await user.click(addTaskButton);
  });
  const errorLabel = screen.getByText(/please enter valid a task/i);
  expect(errorLabel).toBeInTheDocument();

  await act(async () => {
    await user.type(taskTitleInput, "Free ? Review a PR");
    await user.click(addTaskButton);
  });
  const nullErrorLabel = screen.queryByText(/please enter valid a task/i);
  expect(nullErrorLabel).not.toBeInTheDocument();
  expect(mockSuccessEntry).toBeCalled();
});
