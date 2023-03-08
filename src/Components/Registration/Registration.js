import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from 'react-bootstrap';

const Registration = () => {
return (
  <div className="registration m-5">
    <Form className="col-lg-6 offset-3 p-3">
      <div className="form p-lg-5 rounded-3">
        <h1 className=" text-decoration-underline text-center mb-5 text-uppercase">
          Registration Form
        </h1>
        <Form.Group
          className=" mb-3  d-flex"
          controlId="formBasicEmail"
        ></Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label className=" text-black">First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label className=" text-black">Username</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gander</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose..</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label className=" text-black">Date Of Birth</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label className=" text-black">Number</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group
          className="mb-3 d-flex justify-content-between"
          id="formGridCheckbox"
        >
          <Form.Check type="checkbox" label="Check me out" />
          <NavLink href="/login">I have a Account</NavLink>
        </Form.Group>

        <Button className=' align-content-center w-100' variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  </div>
);
}

export default Registration;