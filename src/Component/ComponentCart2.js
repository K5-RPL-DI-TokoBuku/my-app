import React from "react";
import { Row, Col, Card, Button,Form } from "react-bootstrap";
import CartTotal from "./CartTotal";

const ComponentCart2 = ({handleNextToFormCheckout, next, costShiping, handleCostShipping, handleNext }) => {
  return (
    <div>
      <Row>
        <Col>
          <Card>
            <Card.Header>BILLING DETAILS</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="ex. 82162097321" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Order Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="email"
                    placeholder="Optional"
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>YOUR ORDER</Card.Header>
            <Card.Body>
              <CartTotal
                handleNextToFormCheckout={handleNextToFormCheckout}
                next={next}
                costShiping={costShiping}
                handleNext={handleNext}
                handleCostShipping={handleCostShipping}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div style={{ margin: "20px" }}>
        <Button
          onClick={() => {
            handleNextToFormCheckout(false);
          }}
          variant="success"
        >
          Back To Shopping Cart
        </Button>
      </div>
    </div>
  );
};

export default ComponentCart2;
