import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Footer = () => {
    return (
      <div className="bg-dark footer">
        <div className=" container">
          <div className="row text-white text-lg-center">
            <Navbar>
              <div className="col-lg-4">
                <h3 className="mt-5">Customar Care</h3>
                <ul className="list-inline">
                  <nav>
                    <Nav.Link className="text-green" href="#HelpCenter">
                      Help Center
                    </Nav.Link>
                    <Nav.Link href="#howtobuy">How to Buy</Nav.Link>
                    <Nav.Link href="#return&refund">Returns & Refunds</Nav.Link>
                    <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    <Nav.Link href="#trams&condition">
                      Trams & Conditions
                    </Nav.Link>
                  </nav>
                </ul>
              </div>
              <div className="col-lg-4">
                <h3 className="mt-5">Practice Bazar</h3>
                <ul className="list-inline">
                  <nav>
                    <Nav.Link className="text-green" href="#HelpCenter">
                      Help Center
                    </Nav.Link>
                    <Nav.Link href="#howtobuy">How to Buy</Nav.Link>
                    <Nav.Link href="#return&refund">Returns & Refunds</Nav.Link>
                    <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    <Nav.Link href="#trams&condition">
                      Trams & Conditions
                    </Nav.Link>
                  </nav>
                </ul>
              </div>
              <div className="col-lg-4">
                <h3 className="mt-5">Customar Care</h3>
                <ul className="list-inline">
                  <nav>
                    <Nav.Link className="text-green" href="#HelpCenter">
                      Help Center
                    </Nav.Link>
                    <Nav.Link href="#howtobuy">How to Buy</Nav.Link>
                    <Nav.Link href="#return&refund">Returns & Refunds</Nav.Link>
                    <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    <Nav.Link href="#trams&condition">
                      Trams & Conditions
                    </Nav.Link>
                  </nav>
                </ul>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    );
};

export default Footer;