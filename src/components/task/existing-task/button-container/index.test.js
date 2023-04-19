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
  beforeEach(() => {
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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should hide save & done button for completed task", async () => {
    const saveBtn = screen.queryByRole("button", {
      name: /edit task button icon/i,
    });
    expect(saveBtn).not.toBeInTheDocument();

    const markAsDoneBtn = screen.queryByRole("button", {
      name: /complete task button icon/i,
    });
    expect(markAsDoneBtn).not.toBeInTheDocument();
  });

  test("should match date difference between task creation & completion time", () => {
    const completedDaysBtn = screen.getByRole("button", {
      name: /completed in/i,
    });
    expect(completedDaysBtn).toHaveTextContent(/completed in 2 days/i);
  });

  test("should remove task on delete button click", async () => {
    const user = userEvent.setup();

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
});
