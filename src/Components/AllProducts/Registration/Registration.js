import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Nab from '../../LayOut/Navbar/Nab';


const Registration = () => {
return (
  <>
  <Nab></Nab>
    <div className="registration loging_page">
      <Form className="  col-lg-4 offset-4 p-4">
        <div className=" form p-lg-5 rounded-3">
          <h1 className=" text-decoration-underline text-center mb-5 text-uppercase ">
            Registration Form
          </h1>
          <Form.Group
            className=" mb-3  d-flex"
            controlId="formBasicEmail"
          ></Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="">First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3 d-flex " id="formGridCheckbox">
             <input type="checkbox" id="vehicle1"/>
            <h6 className=" d-flex ">
              Do you a have account
              <Link to ="/login">
                <h6>
                  <span>?</span> Login
                </h6>
              </Link>
            </h6>
          </Form.Group>
          <Link to="login">
          <Button className=" align-content-center w-100"variant="primary"ype="submit">
            Submit
          </Button>
          </Link>
        </div>
      </Form>
    </div>
  </>
);
}

export default Registration;