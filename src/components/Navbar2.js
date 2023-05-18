import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const ResponsiveNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={navbarStyle}
      className="fixed-top" // Add fixed-top class for fixed positioning
    >

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mx-auto"
          style={{ gap: '9rem', margin: '0.5rem', padding: '0' }}
        >
          <Nav.Link href="/" style={navLinkStyle}>
            Home
          </Nav.Link>
          <Nav.Link href="/brief" style={navLinkStyle}>
            Technology Catalogue
          </Nav.Link>
          <Nav.Link href="/publications" style={navLinkStyle}>
            Patent
          </Nav.Link>
          {/* <Nav.Link href="/canvas" style={navLinkStyle}>
            Publications
          </Nav.Link> */}
          <Nav.Link href="/publications" style={navLinkStyle}>
            IIITH-Canvas
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const navbarStyle = {
  background: 'linear-gradient(90deg, #09A5AF 16.15%, #546B81 85.67%)',
  height: '50px', // Update the height value as desired
  position: 'fixed', // Add fixed positioning
  top: '5rem', // Add appropriate value for top position
  right: '0', // Add appropriate value for right position
  left: '0' // Add appropriate value for left position
};

const navLinkStyle = {
  fontSize: '1.35vw',
  fontFamily: 'Hahmlet',
  color: '#FFFFFF  ',
  fontWeight: 500
};

export default ResponsiveNavbar;
