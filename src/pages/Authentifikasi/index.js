import React, { useState } from 'react'
import { Container, Alert, Row, Col } from 'react-bootstrap'
import Register from './Register'
import Login from './Login'
import './style.css'


const Authentifikasi = () => {
    const [page, setPage] = useState('login')   
    const [info, setInfo] = useState("")

    const handleHideInfo = () => {
        setInfo(false)
    }

    const changePage = (e) => {
        setPage(e)
        setInfo(false)
    }

    const changeInfo = (e) =>{
        setInfo(e)
    }



    return (
        <div style={{padding: "20px 0"}}>
            <Container>

                <Row className="justify-content-md-center">
                    <Col xs={12} md={6} lg={4}>
                        {info && (
                            <div style={{cursor: 'pointer'}} onClick={handleHideInfo}>
                                <Alert variant={info === "success" ? "success" : "danger" }>
                                    {info === "success" ? "Success Login" : info }
                                </Alert>
                            </div>
                        )}
                    </Col>
                </Row>

                {page === 'login' && (
                    <Login setPage={changePage} setInfo={changeInfo} />
                )}

                {page === 'register' && (
                    <Register setPage={changePage} setInfo={changeInfo} />
                )}
            </Container>
        </div>
    )
}

export default Authentifikasi

           
