import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Link from "next/link";

describe("Link atom compnonent test", () => {
  const mockLink = "http://test.com";
  it("renders a Link", () => {
    render(<Link href={mockLink}>TEST</Link>);
  });
  it("Link has the href attribute", () => {
    render(<Link href={mockLink}>TEST</Link>);
    expect(screen.getByRole("link")).toHaveAttribute("href");
  });
});
