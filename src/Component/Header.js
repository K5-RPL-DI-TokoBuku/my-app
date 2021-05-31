import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Navbar.Brand href="/">
        {/* <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "} */}
        Toko Buku
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/products/6076b0c1301b193234e19870">Top Product</Nav.Link>

          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header
