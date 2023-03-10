import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button} from "react-bootstrap";

const LayOut = () => {
  return (
    <div>
      <div className="navbar_section">
        <Navbar className="navbar" sticky="fixed" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="nabvar_logo" href="/home">
              {" "}
              <img src="/practicebazar.png" alt="" />
            </Navbar.Brand>
            <Nav className="">
              <Nav.Link href="/home">Practice Bazar Sponsore</Nav.Link>
              <Nav.Link href="/registration">Contact</Nav.Link>
              <Nav.Link href="/registration">Signup</Nav.Link>
              <Nav.Link href="/login">
                <Button className="common_button">Login</Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default LayOut;
