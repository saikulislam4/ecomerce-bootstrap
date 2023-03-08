import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const SingleMobile = ({ mobile }) => {
  const { id, img, name, username, email, color, camera, price,  } = mobile;
  return (
    <div className="col-lg-4 container">
      <Card style={{ width: "18rem" }}>
        <Card.Img className='mobile_imge' variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {/* Some quick example text to build on the card title and make up the
            bulk of the card's content. */}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Camera :{camera}</ListGroup.Item>
          <ListGroup.Item>Color: {color}</ListGroup.Item>
          <ListGroup.Item>Price: {price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {/* <Card.Link href="#">Card Link</Card.Link> */}
          <Card.Link href="#">Details</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleMobile;