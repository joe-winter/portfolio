import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "../../pages/Projects"


describe("Projects", () => {
  it("has heading projects", () => {
    render(<Projects/>)

    const headingEl = screen.getByRole('heading')

    expect(headingEl).toHaveTextContent("Projects")
  })
})