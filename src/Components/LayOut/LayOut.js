import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const LayOut = () => {
  return (
    <div>
      <Navbar className="navbar" sticky="fixed" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="" href="/home">PRACTICE BAZAR</Navbar.Brand>
          <Nav className="">
            <Nav.Link href="/home">PRACTICE BAZAR SPONSORE</Nav.Link>
            <Nav.Link href="/registration">SIGNUP</Nav.Link>
            <Nav.Link href="/login">LOGING</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default LayOut;
