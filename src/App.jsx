import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./context/themeProvider";
import NavBar from "./Components/NavBar";
import { useRef, useState } from "react";
function App() {
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false) 

  const scrolltoRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <NavBar
        scrollToProjects={() => scrolltoRef(projectsRef)}
        scrollToAbout={() => scrolltoRef(aboutRef)}
        scrollToHome={() => scrolltoRef(homeRef)}
        scrollToContact={() => scrolltoRef(contactRef)}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <section ref={homeRef}>
        <Home
          scrollToProjects={() => scrolltoRef(projectsRef)}
          scrollToContact={() => scrolltoRef(contactRef)}
          isOpen={isOpen}
        />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </ThemeProvider>
  );
}

export default App;
