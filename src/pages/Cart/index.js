import React, {useState, useEffect} from 'react'
import Header from '../../Component/Header'
import { convertToDuit } from '../../utils/functions';
import {Container, Row, Col, Breadcrumb, Image, Card, Button, Nav, Table} from 'react-bootstrap';

const axios = require('axios')

const TableKeranjang = () => {
  const [change, setChange] = useState(false)
  const [data_cart, setData] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3001/auth/cart'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY'
    axios
    .get(url, {headers: {token}})
    .then(res=>{
      setData(res.data.cart)
      console.log(res.data.cart)

    })
    .catch(err=>{
      console.log(err)
    })
    .finally(()=>{
      console.log('Fetch To get data cart')
    })
  }, [change])

  const subtotal = (a, b) => a * b;


  const handleDelete = (id) =>{
    const url = `http://localhost:3001/auth/delete_from_cart`
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY'
    if(id){
      axios.put(url,{id_product: id}, {headers:{token}})
      .then(res=>{
        setChange(!change)
      })
      .catch(err=>{
        console.log(err)
      })
    }

  }



  return (
    <Card>
      <Card.Header>Keranjang Ku</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>BOOK TITLE</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUB TOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {data_cart &&
              data_cart.map((e,i) => {
                const {image_link,name,price, quantity, _id } = e
                return (
                  <tr>
                    <td>{i+1}</td>
                    <td>{name}</td>
                    <td>Rp. {convertToDuit(price)}</td>
                    <td>{quantity | "1"} pcs</td>
                    <td>Rp. {convertToDuit(subtotal(price, quantity))}</td>
                    <td>
                      <Button variant="primary" style={{marginRight: '10px', color: 'white'}}>Detail</Button>
                      <Button style={{marginRight: '10px'}} variant="primary">Update</Button>
                      <Button onClick={() => handleDelete(_id)} variant="danger">Delete</Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

const Cart = () => {
  return (
    <div>
      
      <Container>
        <TableKeranjang />
      </Container>
    </div>
  )

  
}

export default Cart;
