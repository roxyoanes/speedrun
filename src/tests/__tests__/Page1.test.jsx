import React from "react";
import renderer from "react-test-renderer";
import { Page1 } from "../../containers";

it("matches snapshot", () => {
  const wrapper = renderer.create(
    <Page1 />,
  );
  expect(wrapper).toMatchSnapshot();
});
