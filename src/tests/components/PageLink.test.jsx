import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PageLink from "../../Components/PageLink";
import { useNavigate } from "react-router-dom";

vi.mock('react-router-dom', () => {
  const navigateMock = vi.fn()
  const useNavigateMock = () => navigateMock
  return { useNavigate: useNavigateMock}

})


describe('PageLink', () => {
  it('should call usenaivgate on the given path with clicked', () => {
    render(<PageLink path={'/test'} text={'Test'}/>)

    const buttonEl = screen.getByRole('button')
    fireEvent.click(buttonEl)

    const navigateMock = useNavigate()
    expect(navigateMock).toHaveBeenCalledWith('/test')

    expect(buttonEl).toHaveTextContent('Test')
  })
})