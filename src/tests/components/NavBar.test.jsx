import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavBar from "../../Components/NavBar";


describe('NaBar', () => {
  it('should navigate to home when clicked', () => {
    
    render(<NavBar/>) 

    const homeLinkEl = screen.getByRole('link', { name: 'Joe Winter'})

    expect(homeLinkEl).toHaveAttribute('href', '/')
  })
  it('should navigate to about when clicked', () => {
    
    render(<NavBar/>) 

    const homeLinkEl = screen.getByRole('link', { name: 'About'})

    expect(homeLinkEl).toHaveAttribute('href', '/about')
  })
  it('should navigate to projects when clicked', () => {
    
    render(<NavBar/>) 

    const homeLinkEl = screen.getByRole('link', { name: 'Projects'})

    expect(homeLinkEl).toHaveAttribute('href', '/projects')
  })
  it('should navigate to contact when clicked', () => {
    
    render(<NavBar/>) 

    const homeLinkEl = screen.getByRole('link', { name: 'Contact'})

    expect(homeLinkEl).toHaveAttribute('href', '/contact')
  })
})