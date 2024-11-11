import { Nav } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const NavDropdownMenu = () => {
  return (
    <Nav className="nav-menu" id="nav-menu">
      <div id="nav-links" className="mx-2 mb-2">
        <Link to="about-me" smooth={true} duration={500}>
          About
        </Link>
      </div>
      <div id="nav-links" className="mx-2 mb-2">
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </div>
      <div id="nav-links" className="mx-2 mb-2">
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </div>
      <div id="nav-links" className="mx-2 mb-2">
        <Link to="contact-me" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </Nav>
  );
};

export default NavDropdownMenu;
