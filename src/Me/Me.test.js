import React from "react";
import Me from "./Me";

it("renders the home component correctly", () => {
  const { container } = render(<Me />);
  expect(container).toMatchSnapshot();
});
