import React, { useEffect, useState } from "react";
import {
    useParams
  } from "react-router-dom";
import {Container, Row, Col, Breadcrumb, Image, Card, Button, Nav} from 'react-bootstrap';

import {productService} from '../../services';
import { fakePrice, convertToDuit} from '../../utils/functions';
// import Products from "../Products";


const DetailProduct = () =>{
    const [product, setProduct] = useState('')
    const [quantitas, setQuantitas] = useState(1)
 
    


    let { id } = useParams();

    useEffect(()=>{
        productService
            .getProduct(id)
            .then((res) => {
                setProduct(res.data)
                console.log(res.message)
            })
            .catch(err=>{
                console.log(err)
            })
            .finally(()=>{
                console.log('Fetch Api Detail Product')
            })
    },[id])
    return(
        <div>
            {product && (
                <Container fluid="md">
                    <Row style={{padding: '20px 0'}}>
                        <Col lg={8}>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/products">
                                Products
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
                        </Breadcrumb>
                            <Row>
                                <Col lg={6}>
                                    <div style={{minHeight:'300px', width: '100%'}}>
                                        <Image src={product.image_link} rounded fluid/>
                                    </div>
                                </Col>
                                <Col >
                                    {/* <Card.title>{product.name}</Card.title> */}
                                    <h4><b>{product.name}</b></h4>
                                    <p>Jumlah Product : {product.quantity}</p>
                                    <h1><b>Rp. {convertToDuit(product.price)}</b></h1>
                                    <div style={{display: 'flex'}}>
                                        <p style={{marginRight: '10px',backgroundColor: '#ffc0cb', color: '#cf0029', padding: '5px', borderRadius: '10px'}}>21 %</p>
                                        <h3 style={{color:'#ae6467'}}><s>Rp. {convertToDuit(fakePrice(product.price))}</s></h3>
                                    </div>
                                    <div>
                                        <Card>
                                            <Card.Header>
                                                <Nav variant="tabs" defaultActiveKey="#first">
                                                <Nav.Item>
                                                    <Nav.Link href="#first">Description</Nav.Link>
                                                </Nav.Item>
                                                {/* <Nav.Item>
                                                    <Nav.Link href="#link">Link</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link href="#disabled" disabled>
                                                    Disabled
                                                    </Nav.Link>
                                                </Nav.Item> */}
                                                </Nav>
                                            </Card.Header>
                                            <Card.Body>
                                                {product.description && (
                                                    <div>
                                                        <Card.Text>{product.description}</Card.Text>
                                                        <Button variant="primary">Go somewhere</Button>
                                                    </div>
                                                )
                                                
                                                    
                                                }
                                            </Card.Body>
                                        </Card>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col >
                            <Card>
                                <Card.Header>Ayo Belanja di TokoBuku!</Card.Header>
                                <Card.Body>
                                    {product.description && 
                                        <div>
                                            <Card.Title>Atur jumlah kebutuhan</Card.Title>
                                            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    <p style={{margin: 0,color: 'white', backgroundColor: 'black', padding: '10px', border: '1px solid black', borderRadius: '5px'}}> -- </p>
                                                    <input style={{margin: '0 5px', width: '40px', border: 'none', borderBottom: '1px solid black'}} type="text" value={quantitas} onChange={(e)=> {setQuantitas(e.target.value)}} />
                                                    <p style={{margin: 0, color: 'white', backgroundColor: 'black', padding: '10px', border: '1px solid black', borderRadius: '5px'}}>+</p>
                                                </div>
                                                <div>
                                                    <p style={{margin: '0 10px', }}>Stock : <b>{product.quantity}</b></p>
                                                </div>
                                            </div>
                                            <p>Max. Pembelian 20pcs</p>
                                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                                <div>
                                                    <h4>Subtotal</h4>
                                                </div>
                                                <div>
                                                    <p style={{margin: 0}}><s>Rp.{convertToDuit(fakePrice(product.price))}</s></p>
                                                    <h4><b>Rp.{convertToDuit(product.price)}</b></h4>
                                                </div>
                                            </div>
                                            <Button  variant='primary' block><b>+</b> Keranjang</Button>
                                            <Button variant='outline-primary' block>Beli Langsung</Button>

                                        </div>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )}

        </div>
    )

} 

export default DetailProduct;