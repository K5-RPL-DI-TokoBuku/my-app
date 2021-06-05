import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Breadcrumb, Image, Card, Button,  Alert} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { fakePrice, convertToDuit} from '../../utils/functions';
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { getUserCart } from "../../store/action/index";

import {DetailOrder} from '../../Component'
import { userService } from '../../services';


const Cart = () => {
	const products = useSelector((state) => state.userReducer.userCart);
	const dispatch = useDispatch();
	const [update, setUpdate] = useState(false)
	const [message, setMessage] = useState(false)

	useEffect(() => {
		dispatch(getUserCart())
	}, [dispatch, update]);

	const handleDelete = (e, id) =>{
		e.preventDefault()
		console.log('OK', id)
		userService
			.deleteFromCartUser(id)
			.then(res=>{
				console.log(res)
				setUpdate(!update)
				setMessage(res.message)
			})
			.catch(err=>{
				setMessage('Failed to deleted product')
				console.log(err)
			})
			.finally(()=> {
				console.log('Fetch Api to delete from chart')
			})

	}
	
	let renderedBreadCumb = (
		<Breadcrumb>
			<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
			<Breadcrumb.Item active>
				Cart
			</Breadcrumb.Item>
		</Breadcrumb>
	)

	let renderedListCart = (
		<div>
			{products.map((product,i) => {
				const {image_link, name, price, quantity, _id } = product
				let total_price = quantity * fakePrice(price | 0)
				let str_total_price = `Rp. ${convertToDuit(total_price | 0)}`
				let index = i + 1
					
				return (
					<Card style={{margin: '10px 0'}}>
						<Card.Body>
							<div style={{display: 'flex', justifyContent: 'flex-start'}}>
								<h5 style={{margin: '10px'}}>{index}</h5>
								<div style={{height:'60px', width: '60px', margin: '10px'}}>
									<Image src={image_link} fluid/>
								</div>
								<div style={{margin: '10px'}}>
									<h5>{name}</h5>
									<p style={{color: 'green'}}><b>{str_total_price}</b></p>
								</div>
							</div>
							<div style={{display: 'flex', justifyContent: 'flex-end', margin: '10px'}}>
								<div style={{display: 'flex', justifyContent: 'space-between', margin: '0 30px'}}>
									<Button variant="outline-primary" >-</Button>
									<p style={{margin: '10px'}}><b>{quantity}</b></p>
									<Button variant="outline-primary" >+</Button>
								</div>

								<Button onClick={(e)=> handleDelete(e, _id)} variant='outline-danger'><FaRegTrashAlt /></Button>

							</div>
						</Card.Body>
					</Card>
					
				);
			})}
		</div>
	)

	let renderedEmptyCart = (
		<div style={{display: 'flex', flexDirection: 'column', }}>
			{renderedBreadCumb}
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<div style={{margin: '10px 0', height: '400px', width: '50%'}}>
					<div style={{ display:' flex', justifyContent: 'center'}}>
						<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_Y8UeVt.json"  speed="1" style={{ width: "200px", height: "200px" }} loop autoplay></lottie-player>
					</div>
					<div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
						<h3>Wah, keranjang belanjamu kosong</h3>
						<p>Yuk isi dengan barang barang impian mu</p>
						<div>
							<Button variant='primary'>
								<Link style={{color: 'white'}} to='/'>Mulai Belanja</Link>
							</Button>
						</div>
					</div>
				</div>

			</div>
		</div>
	)

  	return (
    	<Container>
			{products.length === 0 ? renderedEmptyCart : 
				<Row style={{marginBottom: '40px'}}>
					<Col lg={8}>
						{renderedBreadCumb}
						<h5>List My Cart</h5>
						{message && <Alert style={{cursor:'pointer'}} onClick={()=> setMessage(false)} variant={message === 'Failed to deleted product' ? 'danger' : 'success'}>{message}</Alert>}
						{products && renderedListCart}
					</Col>
					
					<Col lg={4}>
						{products ? <DetailOrder products={products} /> : <p>Kejap la</p> }
					</Col>
				</Row>

			}
    	</Container>
	)
}

export default Cart;
