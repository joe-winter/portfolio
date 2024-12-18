import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../../pages/Home"


describe("Home", () => {
  it("has heading Hi there, I'm Joe Winter", () => {
    render(<Home/>)

    const headingEl = screen.getByRole('heading')

    expect(headingEl).toHaveTextContent("Hi there, I'm Joe Winter")
  })
  it("has text", () => {
    render(<Home/>)

    const textEl = screen.getByText('Have a look at my projects or contact me.')

    expect(textEl).toBeInTheDocument()
  })
})