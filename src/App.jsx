import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState(true)

  const toggleTheme = () => {
    setTheme(!theme)
    document.body.classList.toggle('dark')
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home theme={theme} toggleTheme={() => toggleTheme}/>,
    },
    {
      path: "/about",
      element: <About theme={theme} toggleTheme={() => toggleTheme}/>,
    },
    {
      path: "/projects",
      element: <Projects theme={theme} toggleTheme={() => toggleTheme}/>,
    },
    {
      path: "/contact",
      element: <Contact theme={theme} toggleTheme={() => toggleTheme}/>,
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
