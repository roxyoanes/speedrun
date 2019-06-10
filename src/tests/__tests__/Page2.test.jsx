import React from "react";
import renderer from "react-test-renderer";
import { Page2 } from "../../containers";

it("matches snapshot", () => {
  const wrapper = renderer.create(
    <Page2 />,
  );
  expect(wrapper).toMatchSnapshot();
});
