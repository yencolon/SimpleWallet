import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RegisterForm from ".";

describe("RegisterForm Componen", () => {
  it("Should render", () => {
    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    );
  });
});
