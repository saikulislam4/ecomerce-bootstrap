import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import Form from "react-bootstrap/Form";
import { Button, NavLink } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <div className="search_bar p-lg-4 text-white">
        <div className="inner container d-flex justify-content-lg-evenly">
          <div className="cart_logo"></div>
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
              <h1 className="fishopiing_cart position-relative text-black">
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
}

export default SearchBar