import { render, screen } from "@testing-library/react";
import Loader from "components/base/loader";

test("should render loader corretly", async () => {
  render(<Loader />);
  const loaderImg = screen.getByAltText(/loader/i);
  expect(loaderImg).toBeInTheDocument();
});
