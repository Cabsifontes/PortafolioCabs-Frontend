import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavbarC.css";

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="fixed-top navbar-transparent">
      <Container
        fluid
        className="px-4 d-flex align-items-center justify-content-between"
      >
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/img/logo.png"
            alt="Logo del Portafolio"
            className="logo-navbar"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="d-flex align-items-center">
            <Nav.Link as={NavLink} to="/inicio" className="nav-item-custom">
              Inicio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/quien-soy"
              className="nav-item-custom">
              Quién soy
            </Nav.Link>
            <Nav.Link as={NavLink} to="/proyectos" className="nav-item-custom">
              Proyectos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contactame" className="nav-item-custom">
              Contactame
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
