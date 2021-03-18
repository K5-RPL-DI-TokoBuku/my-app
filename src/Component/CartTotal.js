import React from 'react'
import {Card, Button} from 'react-bootstrap'

const CartTotal = ({handleNextToFormCheckout, next, handleNext, costShiping, handleCostShipping}) => {
  
  return (
    <div>
      {next ? (
        <div>
          <Button
            onClick={() => {
              handleNext(false);
            }}
            variant="secondary"
          >
            Back
          </Button>
          <Card.Title>Biaya Belanja</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Card.Title>Biaya Shipping</Card.Title>
          <Card.Text>Rp . {costShiping}</Card.Text>
          <Button
            onClick={() => {
              handleNextToFormCheckout(true)
            }}
            variant="success"
          >
            PROCESS TO CHECKOUT
          </Button>
        </div>
      ) : (
        <div>
          <Card.Title>Shipping</Card.Title>

          <Card.Text>Kota mana ?</Card.Text>
          <Button onClick={() => handleCostShipping(20000)} variant="warning">
            Search
          </Button>
          <Button onClick={handleNext} variant="primary">
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartTotal
