import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Projects from "../../pages/Projects"


describe("Contact", () => {
  it("has heading lets get in touch", () => {
    render(<Projects/>)

    const headingEl = screen.getByRole('heading')

    expect(headingEl).toHaveTextContent("Projects")
  })
})