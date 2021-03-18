import React from 'react'
import {
  Row,
  Col,
  Card,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import CartTotal from './CartTotal'

const ComponentCart1 = ({ data_cart, handleNextToFormCheckout, next, handleNext, costShiping, handleCostShipping }) => {
  
  const subtotal = (a, b) => a * b;
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header>SHOP BY PRICE 2</Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>SUB TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {data_cart &&
                  data_cart.map((e) => {
                    return (
                      <tr>
                        <td>
                          <Image image="https://images.unsplash.com/photo-1612831818835-04968d0746fa?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80" />
                        </td>
                        <td>{e.title}</td>
                        <td>{e.price}</td>
                        <td>{e.quantity | "1"}</td>
                        <td>{subtotal(e.price, e.quantity)}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            <Button variant="primary">Continue Shoping</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header>CART TOTAL</Card.Header>
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
  );
}

export default ComponentCart1
