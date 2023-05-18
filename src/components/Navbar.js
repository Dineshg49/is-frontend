import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from "../Img/logo.png"

const Navbar1 = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={navbarStyle}
      className="fixed-top"
    >
      {/* Navbar Brand (Image) */}
      <Navbar.Brand href="/">
        <img
          src={Logo} // Update the image source as needed
          alt="Navbar Brand"
          style={{   width:'6em',height:'3em' }} // Adjust image styles as desired
        />
      </Navbar.Brand>

      {/* Navbar Toggler */}
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

      {/* Navbar Collapse */}

    </Navbar>
  );
};

const navbarStyle = {
  height: 'auto' // Update the height value as desired
};

const navLinkStyle = {
  fontSize: '22px',
  fontFamily: 'Hamlet',
  color: '#012957',
  fontWeight: 500
};

export default Navbar1;
