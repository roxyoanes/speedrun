import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { Home } from "../../containers";

it("matches snapshot", () => {
  const wrapper = renderer.create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  );
  expect(wrapper).toMatchSnapshot();
});
