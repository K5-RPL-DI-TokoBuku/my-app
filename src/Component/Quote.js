import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Quote = () => {
    return (
        <Container style={{ marginTop: "40px" }}>
            <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {" "}
                    Berpikirlah sebelum kamu berbicara. Bacalah sebelum kamu
                    berpikir.{" "}
                </p>
                <footer className="blockquote-footer">
                    <cite title="Source Title">Fran Lebowitz --</cite>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
        </Container>
    )
}

export default Quote;
