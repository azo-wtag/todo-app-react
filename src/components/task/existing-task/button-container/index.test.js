import { act, screen } from "@testing-library/react";
import { createClient } from "@supabase/supabase-js";
import userEvent from "@testing-library/user-event";
import renderConnected from "utils/helper/rendererConnected";
import ButtonContainer from "components/task/existing-task/button-container";

describe("<ButtonContainer />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should hide save & done button for completed task", () => {
    const mockOnDelete = jest.fn();
    const mockOnDone = jest.fn();
    const mockOnEdit = jest.fn();

    renderConnected(
      <ButtonContainer
        onDelete={mockOnDelete}
        onDone={mockOnDone}
        onEdit={mockOnEdit}
        isTaskCompleted={true}
      />
    );

    const saveBtn = screen.queryByRole("button", {
      name: /edit task button icon/i,
    });
    expect(saveBtn).not.toBeInTheDocument();

    const markAsDoneBtn = screen.queryByRole("button", {
      name: /complete task button icon/i,
    });
    expect(markAsDoneBtn).not.toBeInTheDocument();
  });
});
