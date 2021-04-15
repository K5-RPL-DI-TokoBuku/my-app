import React, { useState } from "react";
import "./style.css";
import { image1 } from "../../assets/index";
import { Form, Button, Container, Row, Col, Image,  Alert } from "react-bootstrap/";
import { userService } from '../../services';
import { setCookie } from '../../utils/cookie';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("")

  const handleHideInfo = () => {
    setInfo(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", email, password, "line 11");
    

    if (email && password){
      const data = {
        email,
        password
      }
      userService
        .loginUser(data)
        .then((response) => {
          console.log(response);
          setInfo("success")
          setEmail("");
          setPassword("");

          const cookieToken = response.token;
            const cookieUser = {
              username: response.user,
              ID: response.ID,
            };
            setCookie('userData', JSON.stringify(cookieUser), 10000);
            setCookie('token', JSON.stringify(cookieToken), 10000);

          var delayInMilliseconds = 1000; //1 second

          setTimeout(function() {
            window.location.replace('/');
            //your code to be executed after 1 second
          }, delayInMilliseconds);

        })
        .catch((err) => {
          console.log(err);
          setInfo("error")
        })
        .finally(() => {
          console.log("Selesai Fetch");
        });
    }
      
  };

  return (
    <div className="loginPageStyle">
      <Container>
        <Row className="styleRow">
          <Col xs={12} md={8}>
            <h3>Whats up!!</h3>
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
          <Col xs={6} md={4}>
            <div>
              {info && (
                <div style={{cursor: 'pointer'}} onClick={handleHideInfo}>
                  <Alert variant={info === "success" ? "success" : "danger" }>
                    {info === "success" ? "Success Login" : "Username and Password salah!" }
                  </Alert>
                </div>
              )}
            </div>
            <h3>Login Form</h3>
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
