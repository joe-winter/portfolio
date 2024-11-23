import { useContext } from "react";
import { ThemeContext } from "../context/themeProvider";
import ThemeIcon from "./ThemeIcon";

const ThemeToggle = () => {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      <ThemeIcon darkMode={darkMode} />
    </button>
  );
};

export default ThemeToggle;
