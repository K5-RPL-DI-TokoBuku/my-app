import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Breadcrumb, Image, Card, Button,  Badge} from 'react-bootstrap';
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
        if(operation === 'plus'){
            res_total = quantitas + 1
        } else {
            res_total = quantitas - 1
        }
        setQuantitas(res_total)
    }

    return(
        <Container fluid="md">
            <Row style={{padding: '20px 0', marginBottom: '40px'}}>
                <Col lg={9}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/products">
                            Products
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{name}</Breadcrumb.Item>
                    </Breadcrumb>

                    
                    <Row>
                        <Col lg={6} >
                            <div>
                                <Image src={image_link} rounded fluid/>
                            </div>
                        </Col>
                        <Col>
                            <Badge pill variant="primary">
                                {category}
                            </Badge>
                            <h5><b>{name}</b></h5>
                            <small className="text-muted">
                                Author <cite title="Source Title">{author}</cite>
                            </small>
                            <hr></hr>
                            <p>{description}</p>
                        </Col>
                    </Row>
                </Col>
                <Col >
                    <Card>
                        <Card.Header>Ayo Belanja di TokoBuku!</Card.Header>
                        <Card.Body>
                            {description && 
                                <div style={{textAlign: 'center'}}>
                                    <Card.Title>Quantity</Card.Title>

                                    <div style={{display:'flex', justifyContent: 'center', marginBottom:'10px'}}>
                                        <Button style={{ display: `${quantitas === 1 ? 'none': 'inline'}`}} variant='primary' onClick={()=> handleQuantity('minus')} >-</Button>
                                        <p style={{margin: '0 5px', textAlign: 'center', width: '40px', border: 'none', borderBottom: '1px solid black', padding:0}}>{quantitas}</p>
                                        <Button style={{ display: `${quantitas === quantity ? 'none': 'inline'}`}} variant='primary' onClick={()=> handleQuantity('plus')}>+</Button>
                                    </div>

                                    <p>Available : <b>{quantity}</b> pcs</p>

                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 5px 20px 5px'}}>
                                        <h5>Total</h5>
                                        <div style={{display:'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                                <p style={{margin: 0, padding: 0, textAlign: 'end', borderRadius: '5px', color : '#ed5249'}}><s>{str_total}</s></p>

                                            </div>
                                            <h5 style={{color: 'green'}}><b>{str_total_diskon}</b></h5>
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
