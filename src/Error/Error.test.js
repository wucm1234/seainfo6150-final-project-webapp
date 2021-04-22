import React from "react";
import Error from "./Error";

it("renders the home component correctly", () => {
  const { container } = render(<Error/>);
  expect(container).toMatchSnapshot();
});
