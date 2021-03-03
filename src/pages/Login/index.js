import React, { useState } from "react";
import "./style.css";
import { image1 } from "../../assets/index";
import { Form, Button, Container, Row, Col, Image, Navbar, Nav, NavDropdown, FormControl } from "react-bootstrap/";
const axios = require("axios");


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", email, password, "line 11");
    axios
      .post("http://localhost:3001/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Selesai Fetch");
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="loginPageStyle">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Toko Buku</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Shope</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Teams" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Ichlasul Amal
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Nabila Sumarno
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Irfan Budi Prakoso
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Imaduddin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Github Repo
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row className="styleRow">
          <Col xs={12} md={8}>
            <h3>Whats Fitur</h3>
            <div>
              <Image src={image1} rounded />
              <div>
                <div className="styleHeader">
                  <p>Bangalore, India</p>
                  <p>3 Maret</p>
                </div>
                <h4>Skill yang Dibutuhkan oleh Seorang Software Engineer ?</h4>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <h3>Login Form</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button style={{width: '100%'}} variant="primary" type="submit">
                Login
              </Button>
              <br></br>
              <hr />

              <p style={{textAlign: 'center'}}>If you dont have account? <a href="/register">Register Here</a></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
