import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Breadcrumb} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar sticky="top" navbar="light" bg="primary"  expand="lg" style={{display: 'flex', flexDirection:'column', justifyContent: 'flex-end', marginBottom: '20px'}}>
        <Container>
          <Navbar.Brand href="/">
            <h3  style={{color: 'white'}}>Toko Buku</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/products" style={{color: 'white'}}>Products</Nav.Link>
              <Nav.Link href="/cart" style={{color: 'white'}}>Cart</Nav.Link>
              <Nav.Link href="/products/6076b0c1301b193234e19870" style={{color: 'white'}}>Top Product</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>       
      </Navbar>
  );
}

export default Header
