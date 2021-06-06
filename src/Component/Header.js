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
		<Navbar sticky="top" expand="lg" style={{ backgroundColor: '#242582',  marginBottom: '20px'}}>
			<Container>
				<Navbar.Brand href="/">
					<h3  style={{color: 'white'}}><FaDiceD6 />Toko Buku</h3>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-light">Search</Button>
						</Form>
					</Nav>
					<Form inline>
						{token ? (
							<div style={{display: 'flex'}}>
								<h4 onClick={() => {
									window.location.replace("http://localhost:3000/cart");
								}} style={{margin: '10px', color: 'white', cursor: 'pointer'}}><FaShoppingCart /></h4>
								<h4 onClick={() => {
									window.location.replace("http://localhost:3000/profile");
								}} style={{margin: '10px', color: 'white', cursor: 'pointer'}}><FaShippingFast /></h4>
								<h4 onClick={() => {
									window.location.replace("http://localhost:3000/profile");
								}} style={{margin: '10px', color: 'white', cursor: 'pointer'}}><FaUserCircle /></h4>
								<h4 onClick={() => {
									window.location.replace("http://localhost:3000/information");
								}} style={{margin: '10px', color: 'white', cursor: 'pointer'}}><FaInfoCircle /></h4>
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
