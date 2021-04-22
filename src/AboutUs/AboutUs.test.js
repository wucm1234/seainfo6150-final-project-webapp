import React from "react";
import AboutUs from "./AboutUs";

it("renders the home component correctly", () => {
  const { container } = render(<AboutUs/>);
  expect(container).toMatchSnapshot();
});
