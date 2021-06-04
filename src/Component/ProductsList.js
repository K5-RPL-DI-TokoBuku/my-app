import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Badge, Alert, Button } from 'react-bootstrap';
import { productService } from '../services';
import { Link } from "react-router-dom";
import { convertToDuit } from '../utils/functions';
import './ProductsList.css';

const axios = require('axios')



const ProductsList = () => {
  const [products, setProducts] = useState("")

  useEffect(()=>{
    productService
      .getProducts()
      .then((res) => {setProducts(res.products)})
      .catch(err => console.log(err))
      .finally(()=> console.log('Fetc api'))
  }, [])

  const handleAddToCart = (e, data) => {
    e.preventDefault()
    const url = `http://localhost:3001/auth/add_to_cart`
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY'
    
    let { name, author, category, image_link, price, quantity, description } = data

    quantity = 1
    
    if(data){
      axios.put(url,{name, author, category, image_link, price, quantity, description}, {headers:{token}})
      .then(res=>{
        console.log('Oke bro')
      })
      .catch(err=>{
        console.log(err)
      })
      .finally(()=>{
        console.log('Fetch to data add to cart')
      })
    }
  }

  return (
    <div>
      <Container>
        <Row>
          {products && products.map((e) => {
            const to = `/products/${e._id}`
            const toCart = `/cart`

            let {name, price, image_link, category } = e
            let str_price = `Rp. ${convertToDuit(price)}`

            if (name.length > 30){
              name = name.slice(0,30) + "..."
            }

            let category_name = ['Algoritma', 'Data Structure', 'Programming', 'Cyber Security', 'Machine Learning', 'Web Development']
            let colors_name = ['primary', 'secondary', 'success', 'danger','warning','info']

            let index = 0

            for(let i = 0 ; i< category_name.length;i++){
              if (category == category_name[i]){
                index = i
              }
            }

            let class_me = `badge badge-${colors_name[index]}`

            return (
              <Col xs={6} sm={6} md={4} lg={3}>
                <Card style={{ marginBottom: '20px' , cursor: 'pointer'}}>
                  <div style={{height: '160px', overflow: 'hidden'}}>
                    <Card.Img variant="top" src={image_link} />
                  </div>
                  <Card.Body>
                    <Badge class={class_me}>{category}</Badge>
                    <div style={{height: '60px'}}>
                      <Card.Title>{name}</Card.Title>
                    </div>
                    <Card.Text>
                      <b>{str_price}</b>
                    </Card.Text>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                      <Button variant='outline-primary' >
                        <Link to={to}>DETAIL</Link>
                      </Button>
                      <Button variant='outline-primary' onClick={(event) => handleAddToCart(event,e)}>
                        ADD TO CART
                      </Button>
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
