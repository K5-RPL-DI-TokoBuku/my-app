import React, { useState } from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'
import { userService } from '../../services';
import { setCookie } from '../../utils/cookie';

import './style.css'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (email && password){
          const data = {
            email,
            password
          }
          userService
            .loginUser(data)
            .then((response) => {
              console.log(response);
              props.setInfo("success")
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
                if(response.ID === '60bd984e0f3d611d0852a6a4'){
                  window.location.replace('/dasboard');
                } else {
                  window.location.replace('/');
                }
                //your code to be executed after 1 second
              }, delayInMilliseconds);
    
            })
            .catch((err) => {
              console.log(err);
              props.setInfo("Server memiliki gangguan untuk login")
            })
            .finally(() => {
              console.log("Selesai Fetch");
            });
        } else {
          props.setInfo('Email and Pssword Salah')
        }
          
      };

    return (
        <div>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6} lg={4} style={{backgroundColor: 'whitesmoke', padding: 20, margin: "60px 0"}}>
                    <h5>Login to Your Toko Buku Account!</h5>
                    <hr></hr>
                    <div class="fb-login-button" data-width="" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" autoComplete="off"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control value={password} onChange={(e)=> setPassword(e.target.value) } type="Password" placeholder="Password" autoComplete="off" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{width: '100%'}} >
                            Log In
                        </Button>
                    </Form>
                    <hr></hr>
                    <Button variant="link" onClick={()=> props.setPage('register')} style={{width: '100%'}} >
                        Register
                    </Button>



                    {/* <p>or <a>Forgot Password</a></p> */}
                </Col>
            </Row>
            <hr></hr>
            <small>Copyright 2022 by Ichlasul Amal</small>
        </div>
    )
}

export default Login
