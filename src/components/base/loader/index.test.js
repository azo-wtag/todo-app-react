import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "components/base/loader";
import renderConnected from "utils/helper/rendererConnected";

test("should render loader corretly", async () => {
  renderConnected(<Loader isLoading={true} />);
  const loaderImg = screen.getByAltText(/loader/i);
  expect(loaderImg).toBeInTheDocument();
});

test("should not loader corretly", async () => {
  renderConnected(<Loader isLoading={false} />);
  const loaderImg = screen.queryByRole(/loader/i);
  expect(loaderImg).not.toBeInTheDocument();
});
