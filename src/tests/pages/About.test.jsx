import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import About from "../../pages/About"


describe("About", () => {
  it("has heading About Me", () => {
    render(<About/>)

    const headingEl = screen.getByRole('heading')

    expect(headingEl).toHaveTextContent("About Me")
  })
})