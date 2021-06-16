/* eslint-disable */
import React, {useState} from 'react'
import { Container, Row, Col, Card, Badge, Alert, Button, Table, Modal, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { convertToDuit } from '../utils/functions';
import { useDispatch } from "react-redux";
import { addToCartUser, getProducts } from "../store/action";
import {productService} from '../services';


const ProductsComponent = (props) => {
	const dispatch = useDispatch();

    const {data, type} = props
    const [dataUpdate, setDataUpdate] = useState({})

    const [modalDelete, setModalDelete] = useState(false)
    const [modalUpdate, setModalUpdate] = useState(false)
    
    const [message, setMessage] = useState(false)

    const handleAddToCart = (e, data_product) => {
        e.preventDefault()
        let new_data_product = data_product
        new_data_product['quantity'] = 1
        dispatch(addToCartUser(new_data_product))
    }

    const handleDelete = (id) => {
        setModalDelete(false)
        console.log('Delete', id)

        productService
            .deleteProduct(id)
            .then(res => {
                console.log("result nya: \n", res)
                setMessage('Success Delete Product')
                dispatch(getProducts())
            })
    }

    const handleSubmitUpdate = () => {
        console.log(dataUpdate)
        setModalUpdate(false)
        productService
            .updateProduct(dataUpdate)
            .then(res=>{
                console.log("result nya: \n", res)
                setMessage('Update Success!')
                dispatch(getProducts())
            })
    }

    let renderProductsCard = (
        <Row>
            {data.map((product, i) => {
                let {_id, name, price, image_link, category } = product
                const to = `/products/${_id}`
                let str_price = `Rp. ${convertToDuit(price)}`

                if (name.length > 30){
                    name = name.slice(0,30) + "..."
                }

                let category_name = ['Algoritma', 'Data Structure', 'Programming', 'Cyber Security', 'Machine Learning', 'Web Development']
                let colors_name = ['primary', 'secondary', 'success', 'danger','warning','info']
                let index = 0

                for(let position = 0 ; position< category_name.length;position++){
                    if (category === category_name[position]){
                        index = position
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
                                <Badge className={class_me}>{category}</Badge>
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
                                    <Button variant='outline-primary' onClick={(event) => handleAddToCart(event,product)}>
                                        ADD TO CART
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    )

    let renderProductsTable = (
        <Table style={{ overflow: 'scroll' }} striped hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Judul Buku</th>
                    <th>Penulis</th>
                    <th>Harga</th>
                    <th>Stok Barang</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((product, index) => {
                    let {_id, name, author, price, quantity} = product
                    const to_detail =`/products/${_id}`
                    const new_index = index+1
                    const str_price = `Rp. ${convertToDuit(price | 0)}`
                    if (name.length > 30){
                        name = `${name.slice(0,30)} ...`
                    }
                    
                    
                    return (
                        <tr>
                            <td>{new_index}</td>
                            <td>
                                <Link to={to_detail} style={{color: 'inherit'}}>{name}</Link>
                            </td>
                            <td>{author}</td>
                            <td>{str_price}</td>
                            <td>{quantity} pcs</td>
                            <td style={{display: 'flex', justifyContent: 'space-around'}}>
                                {/* <Button variant="outline-primary"><Link to={to_update} style={{color: 'blue'}}>Update</Link></Button> */}
                                <Button variant="outline-primary" onClick={(e) => {
                                     setModalUpdate(true)
                                     setDataUpdate(product)
                                }}>Update</Button>
                                <Button variant="outline-danger" onClick={(e) => setModalDelete({'id': _id, 'show': true})}>Delete</Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )


    return (
        <Container>
            <Modal
                show={modalUpdate}
                onHide={()=> setModalUpdate(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Form Update
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control
                                value={dataUpdate['name']}
                                onChange={(e) => setDataUpdate({...dataUpdate, ['name']: e.target.value })}
                                type="text"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                value={dataUpdate['image_link']}
                                onChange={(e) => setDataUpdate({...dataUpdate, ['image_link']: e.target.value })}
                                type="text"
                            />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control
                                        value={dataUpdate['author']}
                                        onChange={(e) => setDataUpdate({...dataUpdate, ['author']: e.target.value })}
                                        type="text"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" value={dataUpdate['category']} onChange={(e) => {
                                        setDataUpdate({...dataUpdate, ['category']: e.target.value })
                                    }}>
                                        <option value="Algorithm">Algorithm</option>
                                        <option value="Data Structure">Data Structure</option>
                                        <option value="Programming">Programming</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                        <option value="Machine Learning">Machine Learning</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Others">Others</option>
                                    </Form.Control>
                                </Form.Group>

                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        value={dataUpdate['price']}
                                        onChange={(e) => setDataUpdate({...dataUpdate, ['price']: e.target.value })}
                                        type="number"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Quantity</Form.Label>
                                    <div style={{display: 'flex'}}>
                                        <Form.Control
                                            value={dataUpdate['quantity']}
                                            onChange={(e) => setDataUpdate({...dataUpdate, ['quantity']: e.target.value })}
                                            type="number"
                                        />
                                    </div>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={dataUpdate['description']}
                                onChange={(e) => setDataUpdate({...dataUpdate, ['description']: e.target.value })}
                                type="text"
                            />
                        </Form.Group>
                    </Form>
                    {/* <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={'outline-primary'} onClick={() => setModalUpdate(false)}>Close</Button>
                    <Button onClick={() => handleSubmitUpdate()}>Update</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={modalDelete['show']}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Yakin Ingin menghapus item ?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onCLick={()=> setModalDelete(false)}>Close</Button>
                    <Button variant="primary" onClick={(e)=> handleDelete(modalDelete['id'])}>Delete</Button>
                </Modal.Footer>
            </Modal>
            {message && <Alert onClick={()=>setMessage(false)} style={{cursor:'pointer'}} variant={message === 'Failed add product to cart' ? 'danger':'success' }>{message}</Alert>}
            {type === 'table' ? renderProductsTable : renderProductsCard} 
        </Container>
    )
}

export default ProductsComponent
