import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { productService } from '../services';
import { Link } from "react-router-dom";
import { convertToDuit } from '../utils/functions';
import './ProductsList.css';



const ProductsList = () => {
  const [products, setProducts] = useState("")

  useEffect(()=>{
    productService
      .getProducts()
      .then((res) => {setProducts(res.products)})
      .catch(err => console.log(err))
      .finally(()=> console.log('Fetc api'))
  }, [])

  return (
    <div>
      <Container>
        <Row>
          {products && products.map((e) => {
            // return <ProductCard e={e} />;
            const to = `/products/${e._id}`
            const toCart = `/cart`

            return (
              <Col xs={6} sm={6} md={4} lg={3}>
                <Card style={{ marginBottom: '20px' }}>
                  <div style={{height: '160px', overflow: 'hidden'}}>
                    <Card.Img variant="top" src={e.image_link} />
                  </div>
                  <Card.Body>
                    <div style={{minHeight: '60px'}}>
                      <Card.Title>{e.name}</Card.Title>
                    </div>
                    <Card.Text>
                      Rp. {convertToDuit(e.price)}
                    </Card.Text>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                      <Link style={{ borderRadius: '5px', padding: '5px 10px', backgroundColor: 'blue', color: 'white'}} to={to}>DETAIL</Link>
                      <Link style={{ borderRadius: '5px', padding: '5px 10px', backgroundColor: 'blue', color: 'white'}} to={toCart} >ADD TO CART</Link>
                      {/* <Button variant="primary">DETAIL</Button> */}
                    </div>
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
