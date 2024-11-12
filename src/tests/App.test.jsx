import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("An example test", () => {
  it("should be true", () => {
    expect(true).toBe(true);
  });
});

describe("App", () => {
  it("renders the App component and prints to terminal", () => {
    render(<App />);

    screen.debug();
  });
});
