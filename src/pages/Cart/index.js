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
    axios
    .get(url, {headers: {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY'}})
    .then(res=>{
      setData(res.data.cart)
      console.log(res.data.cart)

    })
    .catch(err=>{
      console.log(err)
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
                    {/* <td>
                      <Image image={image_link}/>
                    </td> */}
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
      <Breadcrumb>
          <Container style={{display: 'flex', flexDirection: 'row'}}>
            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/cart"  active>
                Products
            </Breadcrumb.Item>

          </Container>
      </Breadcrumb>
      <Container>
        <TableKeranjang />
      </Container>
    </div>
  )

  
}

export default Cart



// return (
//   <div>
//     {/* <Header /> */}
//     <div style={{ padding: "20px 0" }}>
//       <Container>
//         {pembayaran ? (
//           <ComponentCart2
//             data_cart={data_cart}
//             handleNextToFormCheckout={handleNextToFormCheckout}
//             next={next}
//             costShiping={costShiping}
//             handleNext={handleNext}
//             handleCostShipping={handleCostShipping}
//           />
//         ) : (
//           <ComponentCart1
//             data_cart={data_cart}
//             handleNextToFormCheckout={handleNextToFormCheckout}
//             next={next}
//             costShiping={costShiping}
//             handleNext={handleNext}
//             handleCostShipping={handleCostShipping}
//           />
//         )}
//       </Container>
//     </div>
//   </div>
// );

  // Semua data tentang transaksi disimpan disini.
  // Hati hati ketika ngebind data, nanti bisa di add redux klo udah komplek, untuk semntara pake yang bisa jalan dulu
  // const data_cart = [
  //   {
  //     title: "Hai1",
  //     status: "NEW",
  //     price: "Rp 200.000",
  //     image_url:
  //       "https://images.unsplash.com/photo-1523742534376-dc6574ed1bd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  //   },
  //   {
  //     title: "Hai1",
  //     status: "NEW",
  //     price: "Rp 200.000",
  //     image_url:
  //       "https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  //   },
  //   {
  //     title: "Hai1",
  //     status: "NEW",
  //     price: "Rp 200.000",
  //     image_url:
  //       "https://images.unsplash.com/photo-1601814923439-619b33ffa31d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  //   },
  // ];

  // const [pembayaran, setPembayaran] = useState(false)
  // const [next, setNext] = useState(false);
  // const [costShiping, setCostShiping] = useState(false);

  // const useEffect(() => {
    
  // }, [])

  // const handleNext = (e) => {

  //   if (!costShiping) {
  //     alert("Pilih kota dulu");
  //     setNext(false)
  //   } else {
  //     setNext(e);
  //   }
    
  // };

  // const handleNextToFormCheckout = (kondisi) => {
  //   setPembayaran(kondisi)
  // }

  // const handleCostShipping = (e) => {
  //   setCostShiping(e)
  // }