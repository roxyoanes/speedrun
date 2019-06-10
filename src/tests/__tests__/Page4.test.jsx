import React from "react";
import renderer from "react-test-renderer";
import { Page4 } from "../../containers";

it("matches snapshot", () => {
  const wrapper = renderer.create(
    <Page4 />,
  );
  expect(wrapper).toMatchSnapshot();
});
