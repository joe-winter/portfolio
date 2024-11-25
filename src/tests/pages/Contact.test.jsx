import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Contact from "../../pages/Contact";


describe("Contact", () => {
  it("has heading lets get in touch", () => {
    render(<Contact/>)

    const headingEl = screen.getByRole('heading')

    expect(headingEl).toHaveTextContent("Let's Get In Touch!")
  })

  it("has link text to download cv", () => {
    render(<Contact />)

    const textEl = screen.getByText("Feel free to download my CV")

    expect(textEl).toBeInTheDocument()
  })
})