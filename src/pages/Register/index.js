import React, { useState } from "react";
import "./style.css";
import { image1 } from "../../assets/index";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Image,
  Alert
} from "react-bootstrap/";

import {userService} from '../../services';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState("")

  const handleHideInfo = () => {
    setInfo(false)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const nik = 0


    if (name && email && password){
      userService
        .registerUser({email, password, name, nik})
        .then((response) => {
          console.log(response);
          setEmail("");
          setPassword("");
          setName("")
          setInfo("success")
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("Selesai Fetch");
        });

    } else {
      setInfo("error")
    }

  };

  return (
    <div className="loginPageStyle">
      <Container>
        <Row className="styleRow">
          <Col xs={12} md={8}>
            {/* <a href="/"></a> */}
            <a href="/">TOKO - BUKU</a>
            <div>
              <Image src={image1} rounded />
              <div>
                <div className="styleHeader">
                  <p>Bangalore, India</p>
                  <p>3 Maret</p>
                </div>
                {/* <h4>Skill yang Dibutuhkan oleh Seorang Software Engineer ?</h4> */}
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div>
              {info && (
                <div style={{cursor: 'pointer'}} onClick={handleHideInfo}>
                  <Alert variant={info === "success" ? "success" : "danger" }>
                    {info === "success" ? "Success Register" : "Failed Regsiter" }
                  </Alert>
                </div>
              )}
            </div>
            <h3>Register Form</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <div style={{display:'flex'}}>
                  <Form.Control
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter email"
                  />
                  {email && <Button variant="outline-danger" style={{borderRadius: '50%', marginLeft: '10px'}} onClick={(e) => {
                      setEmail("")
                    }}>X</Button>}
                </div>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <div style={{display:'flex'}}>
                  <Form.Control
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter Your Name"
                  />
                  {name && <Button variant="outline-danger" style={{borderRadius: '50%', marginLeft: '10px'}} onClick={(e) => {
                      setName("")
                    }}>X</Button>}
                </div>
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
              <Button style={{ width: "100%" }} variant="primary" type="submit">
                Register
              </Button>
              <br></br>
              <hr />

              <p style={{ textAlign: "center" }}>
                Do you have account? <a href="/login">Login Here</a>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
