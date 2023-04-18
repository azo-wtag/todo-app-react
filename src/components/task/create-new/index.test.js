import { render, screen } from "@testing-library/react";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "react-redux";
import store from "store";
import CreateTask from "components/task/create-new";
import { legacy_createStore as createStore } from "redux";
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
    <Provider store={createStore(store)}>
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
