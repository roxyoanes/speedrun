import React from "react";
import renderer from "react-test-renderer";
import { Page5 } from "../../containers";

it("matches snapshot", () => {
  const wrapper = renderer.create(
    <Page5 />,
  );
  expect(wrapper).toMatchSnapshot();
});
