import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import renderConnected from "utils/helper/rendererConnected";
import Button from "components/base/button";

test("should call onClick if button is clicked", async () => {
  const user = userEvent.setup();
  const mockClick = jest.fn();

  renderConnected(<Button onClick={mockClick}>save</Button>);
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
  await act(async () => {
    await user.click(button);
  });
});
