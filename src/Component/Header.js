import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container} from "react-bootstrap";
import { getCookie } from '../utils/cookie';
import { FaShippingFast, FaDiceD6, FaInfoCircle, FaShoppingCart, FaUserCircle } from "react-icons/fa";


const Header = () => {
	const token = getCookie("token")

	const handleLogout = (e) => {
		// Hapus Cookie
		console.log('Hapus Cookie')
		e.preventDefault()
	}


	return (
		<Navbar sticky="top" expand="lg" style={{display: 'flex', backgroundColor: '#242582', color: '#f64c72' , flexDirection:'column', justifyContent: 'flex-end', marginBottom: '20px'}}>
			<Container>
				<Navbar.Brand href="/">
					<h3  style={{color: 'white'}}><FaDiceD6 />Toko Buku</h3>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/products" style={{color: 'white'}}>Products</Nav.Link>
						<Nav.Link href="/cart" style={{color: 'white'}}>Cart</Nav.Link>
						{/* <Nav.Link href="/products/6076b0c1301b193234e19870" style={{color: 'white'}}>Top Product</Nav.Link> */}
						
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-light">Search</Button>
						</Form>
					</Nav>
					<Form inline>
						{token ? (
							<div style={{display: 'flex'}}>
								<h4 style={{margin: '10px', color: 'white'}}><FaShoppingCart /></h4>
								<h4 style={{margin: '10px', color: 'white'}}><FaShippingFast /></h4>
								<h4 style={{margin: '10px', color: 'white'}}><FaUserCircle /></h4>
								<h4 style={{margin: '10px', color: 'white'}}><FaInfoCircle /></h4>
								<div>
									<Button onClick={(e) => handleLogout(e)} style={{ margin: '10px', backgroundColor: '#f64c72', border: 'none'}}>Logout</Button>
								</div>
							</div>
						) : (
						<div>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-light">Search</Button>
						</div>
						)}
					</Form>
				</Navbar.Collapse>
			</Container>       
		</Navbar>
	);
}

export default Header
