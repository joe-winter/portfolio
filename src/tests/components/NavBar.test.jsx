import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import NavBar from "../../Components/NavBar";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../context/themeProvider";

const toggleTheme = vi.fn()

const darkMode = true

vi.mock("react-router-dom", () => {
  const navigateMock = vi.fn()
  const useNavigateMock = () => navigateMock;
  return { useNavigate: useNavigateMock}
})

describe("NavBar", () => {
  it("should navigate to home when clicked", () => {
    render(
      <ThemeContext.Provider value={{toggleTheme, darkMode}}>
          <NavBar />
      </ThemeContext.Provider>
    );

    const homeLinkEl = screen.getByRole("button", { name: "Joe Winter" });
    fireEvent.click(homeLinkEl)

    const navigateMock = useNavigate()
    expect(navigateMock).toHaveBeenCalledWith('/')

  });
  it("should navigate to about when clicked", () => {
    render(
      <ThemeContext.Provider value={{toggleTheme, darkMode}}>
          <NavBar />
      </ThemeContext.Provider>
    );

    const aboutLinkEl = screen.getByRole("button", { name: "About" });
    fireEvent.click(aboutLinkEl)

    const navigateMock = useNavigate()
    expect(navigateMock).toHaveBeenCalledWith('/about')
  });
  it("should navigate to projects when clicked", () => {
    render(
      <ThemeContext.Provider value={{toggleTheme, darkMode}}>
          <NavBar />
      </ThemeContext.Provider>
    );

    const projectsLinkEl = screen.getByRole("button", { name: "Projects" });
    fireEvent.click(projectsLinkEl)

    const navigateMock = useNavigate()
    expect(navigateMock).toHaveBeenCalledWith('/projects')
  });
  it("should navigate to contact when clicked", () => {
    render(
      <ThemeContext.Provider value={{toggleTheme, darkMode}}>
          <NavBar />
      </ThemeContext.Provider>
    );

    const contactLinkEl = screen.getByRole("button", { name: "Contact" });
    fireEvent.click(contactLinkEl)

    const navigateMock = useNavigate()
    expect(navigateMock).toHaveBeenCalledWith('/contact')
  });
});
