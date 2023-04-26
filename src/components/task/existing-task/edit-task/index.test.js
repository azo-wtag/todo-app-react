import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { asyncFunctionMiddleware } from "store/middleware";
import EditTaskForm from ".";

jest.mock("config/index", () => ({
  from: () => ({
    update: () => ({
      eq: jest.fn(),
    }),
  }),
}));

afterEach(() => {
  jest.clearAllMocks();
});

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

  const cancelBtn = screen.getByRole("button", {
    name: /delete task button icon/i,
  });
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

  const expectedActions = {
    type: "EDIT_TASK",
    payload: { taskId: "1", title: "edited task" },
  };
  expect(store.getActions()).toEqual([expectedActions]);
  expect(mockEdit).toBeCalled();
});

test("should update & mark task as done on check icon click", async () => {
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
  const markAsDoneBtn = screen.getByRole("button", {
    name: /complete task button icon/i,
  });
  expect(markAsDoneBtn).toBeInTheDocument();

  await act(async () => {
    await user.type(taskInput, "edited task");
    await user.click(markAsDoneBtn);
  });

  const expectedActions = [
    { type: "EDIT_TASK", payload: { taskId: "1", title: "edited task" } },
    { type: "SET_IS_LOADING", payload: true },
    { type: "MARK_TASK_DONE", payload: "1" },
    { type: "SET_IS_LOADING", payload: false },
  ];

  expect(store.getActions()).toEqual(expectedActions);
  expect(mockEdit).toBeCalled();
});
