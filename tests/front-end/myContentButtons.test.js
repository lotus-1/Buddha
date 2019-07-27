// import React from 'react'
// import { create } from "react-test-renderer";
// import { cleanup } from '@testing-library/react';
//
// import ButtonItem from './buttons.js'
//
// afterEach(cleanup);
// describe(' checking if buttons are working', () => {
//  test('Button component is working and matching snapshots', () => {
//    const button = create(<ButtonItem name="test for btn 1"/>);
//    expect(button.toJSON()).toMatchSnapshot();
//  });
// });

import React from "react";
import { create } from "react-test-renderer";
describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});

function Button(props) {
  return <button>Nothing to do for now</button>;
}
describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
