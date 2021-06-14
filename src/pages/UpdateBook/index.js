import React, {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert, Breadcrumb, Card } from 'react-bootstrap';
import { convertToDuit } from '../../utils/functions';

const axios = require('axios');

const UpdateBook = () => {
    let { id } = useParams();
    let url = `http://localhost:3001/product/${id}`
	const [data, setData] = useState({})

    const [pengarang, setPengarang] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [info, setInfo] = useState("")
	let str_price = `Rp. ${convertToDuit(price | 0)}`
	const [update, setUpdate] = useState('false')

    useEffect(() => {
		console.log('Hai')
        axios.get(url).then((res) => {
            const {name, author,price, quantity, image_link, description, category} = res.data.data
            setPengarang(author)
            setPrice(price)
            setQuantity(quantity)
            setImage(image_link)
            setDescription(description)
            setCategory(category)
            setTitle(name)
			console.log(name)
			setData({name, author,price, quantity, image_link, description, category})
        })
    }, [update])

    const handleSubmit = (e) => {
		console.log('Updated')
        e.preventDefault();
        if (title.length > 0) {
          axios.put(url, {name: title,
            author: pengarang,
            image_link: image,
            description,
            category,
            price,
            quantity}, {headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY' }}).then(res => {
                console.log(res)
                setInfo('success')
            }).catch(err => {
                console.log(err)
            })
        } else {
          setInfo("error")
        }
		setUpdate(!update)
      }

    const handleHideInfo = () => {
        setInfo(false)
    }

	const handleAddTocart = (id) => {
		const url = `http://localhost:3001/product/${id}`
		const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSWNobGFzdWwgQW1hbCIsImVtYWlsIjoiaWNobGFzdWwwODk5QGdtYWlsLmNvbSIsInVzZXJJRCI6IjYwNzU5YTZkYWEyZTdjM2E2YzM2NzVjYiIsImlhdCI6MTYyMjQyNjY2NX0.ZPBOUDER8LZLGWl1uFB8wabrpX6TCPBF2qjIt90KGwY'

		if (token) {
			axios
				.delete(url, {headers: {token}})
				.then(res => {
					console.log('Success Add to cart')
				})
				.catch(error => {
					console.log(error)
				})
				.finally(()=>{
					console.log('Fetch To delete buku!')
				})
		} else {
			console.log('ADD TO CART CUKK')
		}
	}


	return (
		<Container>
			{info && (
				<div style={{cursor: 'pointer'}} onClick={handleHideInfo}>
					<Alert variant={info === "success" ? "success" : "danger" }>
						{info === "success" ? "Success Add Buku" : "Failed to add buku" }
					</Alert>
				</div>
			)}
	
			<Row style={{marginBottom: '40px'}}>
				<Col lg={8}>
					<Breadcrumb>
						<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
						<Breadcrumb.Item active>
							Update Book
						</Breadcrumb.Item>
					</Breadcrumb>
	
					<Card style={{padding: '20px'}}>
						<Card.Title>Form Update Book</Card.Title>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Book Title</Form.Label>
								<Form.Control
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									type="text"
								/>
							</Form.Group>
	
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Image URL</Form.Label>
								<Form.Control
									value={image}
									onChange={(e) => setImage(e.target.value)}
									type="text"
								/>
							</Form.Group>
	
							<Row>
								<Col>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Author</Form.Label>
										<Form.Control
											value={pengarang}
											onChange={(e) => setPengarang(e.target.value)}
											type="text"
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Category</Form.Label>
										<Form.Control as="select" value={category} onChange={(e) => {
											setCategory(e.target.value)
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
										<Form.Label>Price : {str_price}</Form.Label>
										<Form.Control
											value={price}
											onChange={(e) => setPrice(e.target.value)}
											type="number"
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Quantity</Form.Label>
										<div style={{display: 'flex'}}>
											<Form.Control
												value={quantity}
												onChange={(e) => setQuantity(e.target.value)}
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
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									type="text"
								/>
							</Form.Group>

							<div style={{ display: 'flex', justifyContent:'flex-end'}}>
								<Button style={{margin: '5px'}} variant="outline-secondary">
									<Link to="/products">CANCEL</Link>
								</Button>
								<Button style={{margin: '5px'}} variant="primary" type="submit">SUBMIT</Button>
							</div>
	
						</Form>
					</Card>
				</Col>
				
				<Col lg={4}>
					<Card>
						<Card.Header>Ayo Belanja di TokoBuku!</Card.Header>
						<Card.Body>
							<div style={{height: '300px', overflow: 'hidden'}}>
								<Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg" />
							</div>
							<Card.Title>Cracking the Coding Interview</Card.Title>
							<Card.Text>Rp. 299.000</Card.Text>
							<div style={{display: 'flex', flexDirection: 'column'}}>
								<Button variant='outline-primary' style={{margin:'5px'}}>
									<Link to="/products/6076b0c1301b193234e19870" style={{marginRight: '20px'}}>DETAIL</Link>
								</Button>
								<Button variant='primary' onClick={() => handleAddTocart("6076b0c1301b193234e19870") }  style={{margin:'5px'}}>ADD TO CART</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default UpdateBook
