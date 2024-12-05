import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/themeProvider";
import NavBar from "./Components/NavBar";
import NavBarScroll from "./Components/NavBarScroll";
import { useRef } from "react";
function App() {
  const projectsRef = useRef(null);

  const scrolltoRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth'});
  };
  
  return (
    <ThemeProvider>
        <NavBarScroll scrollToProjects={() => scrolltoRef(projectsRef)} />
      <Home />
      <About />
        <section ref={projectsRef}>
      <Projects/>
        </section>
      <Contact />
    </ThemeProvider>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <NavBar /> <Home />
//       </>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <>
//         <NavBar /> <About />
//       </>
//     ),
//   },
//   {
//     path: "/projects",
//     element: (
//       <>
//         <NavBar /> <Projects />
//       </>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <>
//         <NavBar /> <Contact />
//       </>
//     ),
//   },
// ]);
