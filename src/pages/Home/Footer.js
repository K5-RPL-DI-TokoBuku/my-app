import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import {FaDiceD6} from "react-icons/fa";


const Footer = () => {
    return (
        <div style={{background: 'black', color: 'white', padding: 20}}>
            <hr></hr>
            <Container>
                <Row>
                    <Col>
                        <FaDiceD6 size="4em" />
                        <p>@ Toko Buku 2021</p>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Section</h3>
                                <p>Home</p>
                                <p>Feature</p>
                                <p>Pricing</p>
                                <p>Faqs</p>
                                <p>About</p>
                            </Col>
                            <Col>
                                <h3>Section</h3>
                                <p>Home</p>
                                <p>Feature</p>
                                <p>Pricing</p>
                                <p>Faqs</p>
                                <p>About</p>
                            </Col>
                            <Col>
                                <h3>Section</h3>
                                <p>Home</p>
                                <p>Feature</p>
                                <p>Pricing</p>
                                <p>Faqs</p>
                                <p>About</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
