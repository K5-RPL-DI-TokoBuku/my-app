import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ProductsList.css';

// const ProductCard = ({e}) => {
//   console.log(e.title)
//   return (
//     <Col xs={6} sm={6} md={4} lg={3}>
//       <div className="productCardStyle">
//         <div>
          
//         </div>
//         <h3>{e.title}</h3>
//       </div>
//     </Col>
//   );
// }

const ProductsList = ({data}) => {
  return (
    <div>
      <Container>
        <Row>
          {data && data.map((e) => {
            // return <ProductCard e={e} />;
            return (
              <Col xs={6} sm={6} md={4} lg={3}>
                <Card style={{ marginBottom: '20px' }}>
                  <div style={{height: '160px', overflow: 'hidden'}}>
                    <Card.Img variant="top" src={e.image_url} />
                  </div>
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Text>
                      {e.price}
                    </Card.Text>
                    <Button variant="primary">ADD TO CART</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ProductsList
