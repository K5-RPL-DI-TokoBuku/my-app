import React from 'react';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-one">
        <Container>
          <div className="footer-one-sub">
            <div>
              <h3>INFORMATION</h3>
              <div>
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Privacy and Policy</p>
                <p>Terms and Condition</p>
                <p>Site Map</p>
              </div>
            </div>
            <div>
              <h3>CUSTOMER SUPPORT</h3>
              <div>
                <p>Account</p>
                <p>Wishlist</p>
                <p>Order hystory</p>
                <p>Custom Link</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div>
              <h3>NEWS LETTER</h3>
              <div>
                <p>
                  <i>
                    Stay up to date withnews promotions<br></br> by signing up
                    for our weekly newsletter.
                  </i>
                </p>
                <Form inline style={{marginTop: '20px'}}>
                  <FormControl
                    type="text"
                    placeholder="Enter Your Email"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">SEND</Button>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-two">
        <p>Copyright@2021</p>
        <div className="bank-mitra">
          <p>DANA</p>
          <p>OVO</p>
          <p>GOPAY</p>
        </div>
      </div>
    </div>
  );
}

export default Footer
