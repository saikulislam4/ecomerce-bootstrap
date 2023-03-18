import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Button} from "react-bootstrap";

const LayOut = () => {
  return (
    <div>
      <div className="navbar_section">
        <Navbar className="navbar" sticky="fixed" bg="dark" variant="dark">
          <Container>
            <div className="nabvar_logo" href="/home">
              <Link to="/home">
              <img src="/practicebazar.png" alt="" />
              </Link>
            </div>
            <Nav className="">
              <Link to="/home">Practice Bazar Sponsore</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/registration">Signup</Link>
              <Link to="/login">
                <Button className="common_button">Login</Button>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default LayOut;
