import React from "react";
import { create } from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import Buttons from "./allContentButtons.js";

afterEach(cleanup);
describe(" checking if buttons are working", () => {
  test("Button component is working and matching snapshots", () => {
    const button = create(<Buttons name="test for btn 1" />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
