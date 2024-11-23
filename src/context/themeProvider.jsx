import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((mode) => !mode)
  }

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
    )
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{toggleTheme, darkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}