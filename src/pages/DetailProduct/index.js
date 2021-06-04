import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Container, Row, Col, Breadcrumb, Image, Card, Button, Nav, Badge} from 'react-bootstrap';
import {productService} from '../../services';
import { fakePrice, convertToDuit} from '../../utils/functions';

const DetailProduct = () =>{
    const { id } = useParams();
    const [product, setProduct] = useState('')
    const [quantitas, setQuantitas] = useState(1)
    const {price, description, name, quantity, image_link, category, author} = product
    let total = quantitas * price
    let str_total = `Rp. ${convertToDuit(total | 0)}`
    let total_diskon = quantitas * fakePrice(price)
    let str_total_diskon = `Rp. ${convertToDuit(total_diskon | 0)}`

    let str_sub_total = `Rp. ${convertToDuit(price | 0)}`
    let str_sub_total_diskon = `Rp. ${convertToDuit(fakePrice(price | 0))}`

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

    const handleQuantity = (operation) => {
        let res_total = 0
        if(operation == 'plus'){
            res_total = quantitas + 1
        } else {
            res_total = quantitas - 1
        }
        setQuantitas(res_total)
    }

    return(
        <Container fluid="md">
            <Row style={{padding: '20px 0'}}>
                <Col lg={8}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/products">
                            Products
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                    </Breadcrumb>

                    <Badge pill variant="primary">
                        {category}
                    </Badge>
                    <h2><b>{name}</b></h2>


                    <Card>
                        <div style={{minHeight:'300px', width: '100%'}}>
                            <Image src={image_link} rounded fluid/>
                        </div>
                        <Card.Body>
                            {description && (
                                <div>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Text>{name}</Card.Text>

                                    <Card.Title>Description</Card.Title>
                                    <Card.Text>{description}</Card.Text>

                                    <Card.Title>Stock Product</Card.Title>
                                    <Card.Text>{quantity}</Card.Text>

                                    <Card.Title>Total Discount</Card.Title>
                                    <Card.Text>15 %</Card.Text>

                                    <Card.Title>Price</Card.Title>
                                    <Card.Text>{str_sub_total_diskon}</Card.Text>

                                    <Button variant="primary">
                                        <Link style={{color:'white'}} to="/products">All Product</Link>
                                    </Button>
                                </div>
                            )
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Header>Ayo Belanja di TokoBuku!</Card.Header>
                        <Card.Body>
                            {description && 
                                <div style={{textAlign: 'center'}}>
                                    <Card.Title>Quantity</Card.Title>

                                    <div style={{display:'flex', justifyContent: 'center', marginBottom:'10px'}}>
                                        <Button style={{ display: `${quantitas == 1 ? 'none': 'inline'}`}} variant='primary' onClick={()=> handleQuantity('minus')} >-</Button>
                                        <p style={{margin: '0 5px', textAlign: 'center', width: '40px', border: 'none', borderBottom: '1px solid black', margin: 0, padding:0}}>{quantitas}</p>
                                        <Button style={{ display: `${quantitas == quantity ? 'none': 'inline'}`}} variant='primary' onClick={()=> handleQuantity('plus')}>+</Button>
                                    </div>

                                    <p>Available : <b>{quantity}</b> pcs</p>

                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 5px 20px 5px'}}>
                                        <h4>Total</h4>
                                        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                            <p style={{margin: 0, textAlign: 'end'}}><s>{str_total}</s></p>
                                            <h4><b>{str_total_diskon}</b></h4>
                                        </div>
                                    </div>


                                    <Button  variant='primary' block>ADD TO CART</Button>
                                    <Button variant='outline-primary' block>BUY & CHECKOUT</Button>
                                </div>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )

} 

export default DetailProduct;
