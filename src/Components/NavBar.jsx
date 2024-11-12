import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span>Joe Winter</span>
      </Navbar.Brand>
      <Navbar.Link href="/about">About</Navbar.Link>
      <Navbar.Link href="/projects">Projects</Navbar.Link>
      <Navbar.Link href="/contact">Contact</Navbar.Link>
    </Navbar>
  );
}
