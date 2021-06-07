import React, {useState} from 'react'
import { Container, Row, Col, Card, Badge, Alert, Button, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { convertToDuit } from '../utils/functions';
import { addToCartUser } from '../store/action';
import { useDispatch } from "react-redux";


const ProductsComponent = (props) => {
	const dispatch = useDispatch();

    const {data, type} = props
    const [message, setMessage] = useState(false)

    const handleAddToCart = (e, data_product) => {
        e.preventDefault()
        let new_data_product = data_product
        new_data_product['quantity'] = 1
        dispatch(addToCartUser(new_data_product))
    }

    const handleDelete = (e,id) => {
        e.preventDefault()
        console.log(id)
        console.log("Akan di handle oleh redux")
        // const my_token = getCookie('token')
        // const url = `http://localhost:3001/product/${id}`
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY'

        // function getCookie(cname) {
        //     var name = cname + "=";
        //     var decodedCookie = decodeURIComponent(document.cookie);
        //     var ca = decodedCookie.split(';');
        //     for(var i = 0; i <ca.length; i++) {
        //       var c = ca[i];
        //       while (c.charAt(0) == ' ') {
        //         c = c.substring(1);
        //       }
        //       if (c.indexOf(name) == 0) {
        //         return c.substring(name.length, c.length);
        //       }
        //     }
        //     return "";
        // }

        // if (my_token) {
        //     axios
        //         .delete(url, {headers: {token}})
        //         .then(res => {
        //             setChange(!change)
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        //         .finally(()=>{
        //             console.log('Fetch To delete buku!')
        //         })
        // } else {
        //     console.log('Fuck')
        // }
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
                console.log(class_me)
                console.log('Style Badge masih error')

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
                    const to_update =`/update-book/${_id}`
                    const new_index = index+1

                    if (name.length > 30){
                        name = `${name.slice(0,30)} ...`
                    }

                    let str_price = `Rp. ${convertToDuit(price | 0)}`
                    
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
                                <Button variant="outline-primary"><Link to={to_update} style={{color: 'blue'}}>Update</Link></Button>
                                <Button variant="outline-danger" onClick={(e) => handleDelete(e, _id)}>Delete</Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )


    return (
        <Container>
            {message && <Alert onClick={()=>setMessage(false)} style={{cursor:'pointer'}} variant={message === 'Failed add product to cart' ? 'danger':'success' }>{message}</Alert>}
            {type === 'table' ? renderProductsTable : renderProductsCard} 
        </Container>
    )
}

export default ProductsComponent
