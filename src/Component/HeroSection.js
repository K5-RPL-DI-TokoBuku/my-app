import React from "react";
import "../App.css";
import "./HeroSection.css";
import { Button , Container, Row, Col} from 'react-bootstrap';

function HeroSection() {
  return (
    <div style={{ marginBottom: '40px', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Container>
        <Row>
          <Col lg={6}>
            <h1>Toko Buku!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">See Products</Button>
            </p>
          </Col>
          <Col>
            {/* <p>Hello world</p> */}
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default HeroSection;
