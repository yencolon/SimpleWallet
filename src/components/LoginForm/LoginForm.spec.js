import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import LoginForm from ".";

describe("LoginForm Component", () => {
  it("Should render", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );
  });
});
