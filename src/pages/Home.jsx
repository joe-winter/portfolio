import NavBar from "../Components/NavBar";

export default function Home({theme, toggleTheme}) {
  return (
    <>
    <NavBar theme={theme} toggleTheme={toggleTheme}/>
    <h4>Hi there, I&apos;m Joe Winter</h4>
    </>
  )
}