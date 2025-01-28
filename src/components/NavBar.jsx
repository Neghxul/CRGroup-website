import React, { useState, useEffect } from "react";
import { FaFacebookSquare, 
    FaWhatsappSquare,
    FaTwitterSquare,
    FaInstagramSquare } from "react-icons/fa";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

    
    

const NavBar = () => {

    const [showHeader, setShowHeader] = useState(true);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          if (currentScrollPos > lastScrollPos && currentScrollPos > 50) {
                setShowHeader(false); // Oculta el header al desplazar hacia abajo
                setIsScrollingDown(true); // Fija el navbar en top: 0
            } else {
            setShowHeader(true); // Muestra el header al desplazar hacia arriba
            setIsScrollingDown(false); // Ajusta el navbar debajo del header
        }
          setLastScrollPos(currentScrollPos); // Actualiza la posición del scroll
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [lastScrollPos]);

    return (
        <>
        <div className={`header-container ${showHeader ? "visible" : "hidden"}`}>
            <div className="logo">
                <img src="https://drive.google.com/uc?id=10HZ3mM8h7zztbAnRbqZiS627EhqlUsEL" />
            </div>
            <div className="social-media">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaWhatsappSquare />
                <FaTwitterSquare /> 
            </div>
        </div>

        {/*<Navbar bg="dark" variant="dark" expand="lg"
        className={`navbar-container ${
            isScrollingDown ? "fixed" : "below-header"
          }`}>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Opción 1" id="nav-dropdown">
                <NavDropdown.Item href="#">Subopción 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Subopción 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Opción 2" id="nav-dropdown">
                <NavDropdown.Item href="#">Subopción 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Subopción 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>*/}

        <div className={`navbar-container ${
          isScrollingDown ? "fixed" : "below-header"
        }`}>
            <div className="navbar-menu">
                <div className="menu-box menu1">
                    MENU 1
                </div>
                <div className="menu-box menu2">
                    MENU 2
                </div>
                <div className="menu-box menu3">
                    MENU 3
                </div>
                <div className="menu-box menu4">
                    MENU 4
                </div>
                <div className="menu-box menu5">
                    MENU 5
                </div>
            </div>
        </div>
        </>
    )
}


export default NavBar;
