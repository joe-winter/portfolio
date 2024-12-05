import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/themeProvider";
import NavBar from "./Components/NavBar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar /> <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar /> <About />
        </>
      ),
    },
    {
      path: "/projects",
      element: (
        <>
          <NavBar /> <Projects />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <NavBar /> <Contact />
        </>
      ),
    },
  ]);

  return (
    <ThemeProvider>
      {/* <RouterProvider router={router} /> */}
      <>
      <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
