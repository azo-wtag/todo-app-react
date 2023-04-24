import { act, screen } from "@testing-library/react";
import { createClient } from "@supabase/supabase-js";
import userEvent from "@testing-library/user-event";
import renderConnected from "utils/helper/rendererConnected";
import TaskCard from "../task-card";
import { ToastContainer } from "react-toastify";

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

describe("<TaskCard />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should match date difference between task creation & completion time", () => {
    renderConnected(
      <>
        <ToastContainer />
        <TaskCard
          taskId="#123"
          title="Review a PR"
          createdAt="2023-04-11"
          isCompleted={true}
          completedAt={"2023-04-12"}
        />
      </>
    );

    const completedDaysBtn = screen.getByRole("button", {
      name: /completed in/i,
    });
    expect(completedDaysBtn).toHaveTextContent(/completed in 2 days/i);
  });

  test("should remove task on delete button click", async () => {
    const user = userEvent.setup();

    renderConnected(
      <>
        <ToastContainer />
        <TaskCard
          taskId="#123"
          title="Review a PR"
          createdAt="2023-04-11"
          isCompleted={true}
          completedAt={"2023-04-12"}
        />
      </>
    );

    const deleteButton = screen.getByRole("button", {
      name: /delete task button icon/i,
    });
    expect(deleteButton).toBeInTheDocument();
    await act(async () => {
      await user.click(deleteButton);
    });
    const deleteMsg = screen.getByText(/task deleted successfully/i);
    expect(deleteMsg).toBeInTheDocument();
  });

  test("Should show edit-task-form on edit button click", async () => {
    const user = userEvent.setup();

    renderConnected(
      <>
        <TaskCard
          taskId="#123"
          title="Review a PR"
          createdAt="2023-04-11"
          isCompleted={false}
        />
      </>
    );

    const editButton = screen.getByRole("button", {
      name: /edit task button icon/i,
    });
    expect(editButton).toBeInTheDocument();
    await act(async () => {
      await user.click(editButton);
    });

    const saveBtn = screen.getByRole("button", {
      name: /save/i,
    });
    expect(saveBtn).toBeInTheDocument();
    const cancelBtn = screen.getByRole("button", {
      name: /delete task button icon/i,
    });
    expect(cancelBtn).toBeInTheDocument();
    const doneBtn = screen.getByRole("button", {
      name: /complete task button icon/i,
    });
    expect(doneBtn).toBeInTheDocument();
  });
});
