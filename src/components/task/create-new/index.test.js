import { act, screen } from "@testing-library/react";
import { createClient } from "@supabase/supabase-js";
import userEvent from "@testing-library/user-event";
import CreateTask from "components/task/create-new";
import { ALT_DELETE_ICON_TAG } from "utils/const";
import renderConnected from "utils/helper/rendererConnected";

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

test("should render form fields", () => {
  const mockSuccessEntry = jest.fn();
  const mockDelete = jest.fn();

  renderConnected(
    <CreateTask
      onSuccessfullTaskEntry={mockSuccessEntry}
      onDelete={mockDelete}
    />
  );

  const taskTitle = screen.getByRole("textbox");
  expect(taskTitle).toBeInTheDocument();
  const addTaskBtn = screen.getByRole("button", { name: /add task/i });
  expect(addTaskBtn).toBeInTheDocument();
  const deleteTaskIcon = screen.getByRole("img", { name: ALT_DELETE_ICON_TAG });
  expect(deleteTaskIcon).toBeInTheDocument();
});

test("should validate form fields", async () => {
  const mockSuccessEntry = jest.fn();
  const mockDelete = jest.fn();

  const user = userEvent.setup();

  renderConnected(
    <CreateTask
      onSuccessfullTaskEntry={mockSuccessEntry}
      onDelete={mockDelete}
    />
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
