import React from "react";
import renderer from "react-test-renderer";
import { Page3 } from "../../containers";

it("matches snapshot", () => {
  const wrapper = renderer.create(
    <Page3 />,
  );
  expect(wrapper).toMatchSnapshot();
});
