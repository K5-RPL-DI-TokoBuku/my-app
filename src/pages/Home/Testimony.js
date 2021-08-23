import React from 'react'
import { Container, Row, Col, Image , Button} from 'react-bootstrap'
import './style.css'

const Testimony = () => {
    return (
        <div style={{padding :"20px 0", background:'whitesmoke'}}>
            <Container>
                <Row xs={1} md={2} lg={2} className="testimony-wrapper">
                    <Col>
                        <h3>Become an instructor</h3>
                        <p>Instructors from around the world teach millions of students on tokobuku. We provide the tools and skills to teach what you love.</p>
                        <Button>Start teaching today</Button>
                    </Col>
                    <Col style={{textAlign: 'end'}}>
                        <Image src="https://images.unsplash.com/photo-1591847660115-db885c296217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80" rounded />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Testimony
