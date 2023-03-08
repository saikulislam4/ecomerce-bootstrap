import React from 'react';
import { NavLink } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
    return (
      <div className="container ">
        <div className="row logo ">
          <div className=" border col-lg-4 p-5 rounded-3">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h1 className='text-center text-uppercase mb-5'>login Form</h1>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex justify-content-between"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Check me out" />
                <NavLink href="">Forget Password?</NavLink>
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Login
              </Button>
              <div className="registration text-center text-10 mt-3">
                <NavLink href="/registration"> Create Account </NavLink>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Login;