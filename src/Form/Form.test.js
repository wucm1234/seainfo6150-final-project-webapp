import React from "react";
import Form from "./Form";

it("renders the home component correctly", () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});
