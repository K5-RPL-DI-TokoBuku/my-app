import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import {FaDiceD6} from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className="footerHead">
                <Container>
                    <Row xs={1} md={3} lg={4}>
                        <Col><p className="fanta">Fanta</p></Col>
                        <Col><p className="cocacola">Coca cola</p></Col>
                        <Col><p className="sprite">Sprite</p></Col>
                        <Col><p className="fruit">Fruitamin</p></Col>

                    </Row>
                    <hr style={{ border: "1px solid white"}}></hr>
                    <Row >
                        <Col>
                            <FaDiceD6 size="4em" />
                            <p>TOKO BUKU</p>
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
            <div className="footerCopyright">
                <Container style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <p>@ Toko Buku 2021</p>
                    </div>
                    <ul>
                        <li><FaDiceD6 /></li>
                        <li><FaDiceD6 /></li>
                        <li><FaDiceD6 /></li>
                        <li><FaDiceD6 /></li>
                    </ul>

                </Container>
            </div>
        </div>
    )
}

export default Footer
