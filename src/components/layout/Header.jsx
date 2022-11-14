import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar id="navbarDiv" expand="lg">
      <Container>

      <Navbar.Brand id="appName">Conquian</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="linkDiv">
          <Nav>
            <Link to="/" id="link">Home</Link>
            <Link to="/rules" id="link">Rules</Link>
            <Link to="/game" id="link">Game</Link>
            <Link to="/register" id="link">Register</Link>
            <Link to="/login" id="link">Login</Link>
          </Nav>
      </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header