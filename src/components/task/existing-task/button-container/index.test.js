import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
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
        onDeleteClick={mockOnDelete}
        onDoneClick={mockOnDone}
        onEditClick={mockOnEdit}
        isTaskCompleted={true}
      />
    );

    const saveButton = screen.queryByRole("button", {
      name: /edit task button icon/i,
    });
    expect(saveButton).not.toBeInTheDocument();

    const markAsDoneButton = screen.queryByRole("button", {
      name: /complete task button icon/i,
    });
    expect(markAsDoneButton).not.toBeInTheDocument();
  });

  test("should show all action buttons for incompleted task", () => {
    const mockOnDelete = jest.fn();
    const mockOnDone = jest.fn();
    const mockOnEdit = jest.fn();

    renderConnected(
      <ButtonContainer
        onDeleteClick={mockOnDelete}
        onDoneClick={mockOnDone}
        onEditClick={mockOnEdit}
        isTaskCompleted={false}
      />
    );

    const saveButton = screen.getByRole("button", {
      name: /edit task button icon/i,
    });
    expect(saveButton).toBeInTheDocument();
    const markAsDoneButton = screen.getByRole("button", {
      name: /complete task button icon/i,
    });
    expect(markAsDoneButton).toBeInTheDocument();
    const deleteButton = screen.getByRole("button", {
      name: /delete task button icon/i,
    });
    expect(deleteButton).toBeInTheDocument();
  });
});
