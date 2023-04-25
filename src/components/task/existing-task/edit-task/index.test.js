import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { createClient } from "@supabase/supabase-js";
import { asyncFunctionMiddleware } from "store/middleware";
import EditTaskForm from ".";

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

test("should hide edit-task-form on delete button click", async () => {
  const initialState = {
    filter: {
      tasks: [],
    },
  };

  const mockStore = configureStore([asyncFunctionMiddleware]);
  const store = mockStore(initialState);

  const user = userEvent.setup();
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();

  render(
    <Provider store={store}>
      <EditTaskForm taskId="1" onDelete={mockDelete} onTaskEdit={mockEdit} />
    </Provider>
  );

  const editBtn = screen.getByRole("button", {
    name: /complete task button icon/i,
  });
  const cancelBtn = screen.getByRole("button", {
    name: /delete task button icon/i,
  });
  expect(editBtn).toBeInTheDocument();
  expect(cancelBtn).toBeInTheDocument();

  await act(async () => {
    await user.click(cancelBtn);
  });
  expect(mockDelete).toBeCalled();
});

test("should save updated task on save button click", async () => {
  const initialState = {
    filter: {
      tasks: [],
    },
  };

  const mockStore = configureStore([asyncFunctionMiddleware]);
  const store = mockStore(initialState);

  const user = userEvent.setup();
  const mockDelete = jest.fn();
  const mockEdit = jest.fn();

  render(
    <Provider store={store}>
      <EditTaskForm taskId="1" onDelete={mockDelete} onTaskEdit={mockEdit} />
    </Provider>
  );

  const taskInput = screen.getByRole("textbox");
  const saveBtn = screen.getByRole("button", {
    name: /save/i,
  });
  expect(saveBtn).toBeInTheDocument();

  await act(async () => {
    await user.type(taskInput, "edited task");
    await user.click(saveBtn);
  });
  expect(mockEdit).toBeCalled();
});
