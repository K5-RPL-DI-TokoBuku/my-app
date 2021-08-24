import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button, ProgressBar, OverlayTrigger, Tooltip} from 'react-bootstrap'
import {userService} from '../../services';

import './style.css'

const Register = (props) => {

    const [progress, setProgress] = useState(0)
    const [progress2, setProgress2] = useState(0)
    const [progress3, setProgress3] = useState(0)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    useEffect(() => {
        // Contain at least 8 characters
        const haveMoreCharacter = password.length >= 8
        // contain at least 1 number
        const haveNumber = password.match(new RegExp("[0-9]"))
        // contain at least 1 lowercase character (a-z)
        const haveSmallCase = password.match(new RegExp("[a-z]"))

        if(haveMoreCharacter){
            setProgress(100)
        } else {
            setProgress(0)
        }
        if (haveNumber){
            setProgress2(100)
        }else {
            setProgress2(0)
        }
        if (haveSmallCase){
            setProgress3(100)
        } else {
            setProgress3(0)
        }
    }, [password])

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
              props.setInfo("success")
            })
            .catch((err) => {
              console.log(err);
              props.setInfo("Server memiliki gangguan untuk mendaftar")

            })
            .finally(() => {
              console.log("Selesai Fetch");
            });
    
        } else {
          props.setInfo("Formulir harus diisi semua")
        }
    
      };

    return (
        <div>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6} lg={4} style={{backgroundColor: 'whitesmoke', padding: 20}}>
                    <h5>Sign Up and Start Learning</h5>
                    <hr></hr>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Enter email" autoComplete="off"/>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" autoComplete="off" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control value={password} onChange={(e)=> setPassword(e.target.value) } type="password" placeholder="Password" autoComplete="off" />
                        </Form.Group>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <OverlayTrigger
                                key="bottom"
                                placement="bottom"
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        Have minimal 8 characters.
                                    </Tooltip>
                                }
                                >
                                <ProgressBar animated now={progress} className="progress" />
                            </OverlayTrigger>
                            <OverlayTrigger
                                key="bottom"
                                placement="bottom"
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                        Contain at least 1 number
                                    </Tooltip>
                                }
                                >
                                <ProgressBar animated now={progress2} className="progress" />
                            </OverlayTrigger>
                            <OverlayTrigger
                                key="bottom"
                                placement="bottom"
                                overlay={
                                    <Tooltip id={`tooltip-bottom`}>
                                       Contain at least 1 lowercase character (a-z).
                                    </Tooltip>
                                }
                                >
                                <ProgressBar animated now={progress3} className="progress" />
                            </OverlayTrigger>
                            

                        </div>
                        <br></br>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Yes! I want to get the most out of Udemy by receiving emails with exclusive deals, personal recommendations and learning tips!" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{width: "100%"}}>
                            Sign Up
                        </Button>
                    </Form>

                    <hr></hr>

                    <Button variant="link" onClick={()=> props.setPage('login')} style={{width: '100%'}} >
                        Login
                    </Button>
                    



                
                </Col>
            </Row>
            <hr></hr>
            <small>Copyright 2022 by Ichlasul Amal</small>
        </div>
    )
}

export default Register
