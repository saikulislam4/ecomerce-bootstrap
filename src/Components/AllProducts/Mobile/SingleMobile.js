import React from 'react';
import { Button, NavLink } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const SingleMobile = ({ mobile }) => {
  const { id, img, name, username, email, color, camera, price,  } = mobile;
  return (
    <div className="col-lg-3 container">
      <Card className=" mb-lg-5 text-lg-start" style={{ width: "18rem" }}>
        <Card.Img className="mobile_imge" variant="top" src={img} />
        <div className="text-lg-start align-content-lg-start">
          <ListGroup.Item > <h5 className="" style={{ fontSize: "30px", marginBottom:"30px" }}>{name} </h5></ListGroup.Item>
          <ListGroup.Item> <h5>Camera :{camera} </h5></ListGroup.Item>
          <ListGroup.Item><h5>Color: {color}</h5>
          </ListGroup.Item>
          <ListGroup.Item className="" style={{ color: "red" }}>
            <h5> Price: {price}</h5>
          </ListGroup.Item>
        </div>
        <NavLink href="/about">
          <Button className=" mb-lg-4 w-100"> Details </Button>
        </NavLink>
      </Card>
    </div>
  );
};

export default SingleMobile;