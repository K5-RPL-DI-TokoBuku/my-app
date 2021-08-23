import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './style.css'
import {FaSearch} from "react-icons/fa";



const Jumbotron = () => {
    return (
        <div className="wrapper">
            <Container className="mycontainer">
                <Row className="content-wrapper" xs={1} md={2} lg={2}>
                    <Col className="content">
                        <h1>Learning that gets you</h1>
                        <p>Skills for your present (and your future). get started with us.</p>
                        <div className="search-wrapper">
                            <input className="search-form" placeholder="What do you want to learn!" />
                            <Button variant="light" className="button-search"><FaSearch /></Button>
                        </div>

                    </Col>
                    <Col>
                        {/* <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={background1}
                                    alt="Third slide"
                                    height="200px"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <Button>BUY COURSES</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={background1}
                                    alt="Third slide"
                                    height="200px"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    <Button>BUY COURSES</Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Jumbotron
