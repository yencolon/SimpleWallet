import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from ".";

describe("Nav Component", () => {
  it("Should render", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
  });
});
