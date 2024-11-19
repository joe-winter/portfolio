import NavBar from "../Components/NavBar";

export default function About({theme, toggleTheme}) {
  return (
    <>
    <NavBar theme={theme} toggleTheme={toggleTheme}/>
    <h4>About Me</h4>
    </>
  )
}