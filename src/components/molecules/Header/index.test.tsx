import "@testing-library/jest-dom";
import { Header } from "./";
import { render } from "@testing-library/react";

describe("Header molecule component test", () => {
  const showSidebar = jest.fn();
  it("renders a Header", () => {
    render(<Header showSidebar={showSidebar} />);
  });
});
