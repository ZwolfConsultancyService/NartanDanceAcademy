import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const carouselElement = document.querySelector(".carousel");
      const carouselHeight = carouselElement ? carouselElement.offsetHeight : 0;

      if (window.scrollY > carouselHeight) {
        setTransparent(false);
      } else {
        setTransparent(true);
      }

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Call once to set initial state
    } else {
      setTransparent(false); // Disable transparency on non-home routes
      setScrolled(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header>
      <Navbar
        expand="lg"
        className={`nav-main ${scrolled ? "scrolled" : ""} ${
          expanded ? "expanded" : ""
        } ${transparent ? "transparent" : ""}`}
        fixed="top"
        expanded={expanded}
      >
        <div className="container-fluid ms-3">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              alt=""
              src="/images/logo.jpeg"
              width="50"
              height="50"
              className="d-inline-block align-top rounded-circle me-3"
            />
            <span className="h4 mb-0">
              <strong>Nartan Academy</strong>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
            className="navbar-toggler-custom"
          >
            <FaBars
              size={30}
              color={scrolled || expanded ? "white" : "green"}
            />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mr-auto nav-items">
              <Nav.Link
                as={Link}
                to="/"
                className="main-li"
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link                                                                                      
                as={Link}
                to="/about-us"
                className="main-li"
                onClick={() => setExpanded(false)}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dance-course"
                className="main-li"
                onClick={() => setExpanded(false)}
              >
                Dance Course
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/our-gallery"
                className="main-li"
                onClick={() => setExpanded(false)}
              >
                Gallery              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact-us"
                className="main-li"
                onClick={() => setExpanded(false)}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
