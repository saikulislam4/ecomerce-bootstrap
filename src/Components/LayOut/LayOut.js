import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Button, NavLink } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
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
              <Nav.Link href="/home">PRACTICE BAZAR SPONSORE</Nav.Link>
              <Nav.Link href="/registration">SIGNUP</Nav.Link>
              <Nav.Link href="/login">LOGING</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="search_bar  bg-black p-lg-4 text-white">
        <div className="inner container d-flex justify-content-lg-evenly">
          <div className="cart_logo">
          </div>
          <div className="search w-75">
            <Form className="d-flex w-50">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </div>
          <div className="cart ">
            <NavLink>
              <h1 className="fishopiing_cart position-relative">
                <FiShoppingCart />
                <span className="cart_number position-absolute">
                  <h3>10</h3>
                </span>
              </h1>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayOut;
