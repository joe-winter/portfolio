import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

// export const useTheme = () => {
//   return useContext(ThemeContext)
// }

export const ThemeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((mode) => !mode)
  }

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
    if (darkMode) {
      localStorage.theme = 'dark'
    } else {
      localStorage.theme = 'light'
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{toggleTheme, darkMode}}>
      {children}
    </ThemeContext.Provider>
  )
}