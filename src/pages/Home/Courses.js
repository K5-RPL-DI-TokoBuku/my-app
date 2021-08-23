import React from 'react'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import './style.css'


const Courses = () => {
    const courses = [
        {
          image: 'https://images.unsplash.com/photo-1628191079535-d1900add3533?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          title: 'Learning Python Programming Masterclass',
          created: 'iklas',
          rating: '4.7',
          total_user: 456789,
          price: 45000
        },
        {
          image: 'https://images.unsplash.com/photo-1628191079535-d1900add3533?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          title: 'Learning Python Programming Masterclass',
          created: 'iklas',
          rating: '4.7',
          total_user: 456789,
          price: 45000
        },
        {
          image: 'https://images.unsplash.com/photo-1628191079535-d1900add3533?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          title: 'Learning Python Programming Masterclass',
          created: 'iklas',
          rating: '4.7',
          total_user: 456789,
          price: 45000
        },
        {
          image: 'https://images.unsplash.com/photo-1628191079535-d1900add3533?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          title: 'Learning Python Programming Masterclass',
          created: 'iklas',
          rating: '4.7',
          total_user: 456789,
          price: 45000
        }
      ]
    return (
        <div style={{padding: 20}}>
            <Container style={{paddingBottom: 20}}>
                <div className="title-header">
                    <h3>Courses</h3>
                </div>
                <Row xs={1} md={3} lg={4} className="g-4" >
                    {courses.map(course => {
                        return(
                        <Col style={{paddingTop: '20px'}}>
                            <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={course.image} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Add to cart</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                
                </Row>

            </Container>
        </div>
    )
}

export default Courses
