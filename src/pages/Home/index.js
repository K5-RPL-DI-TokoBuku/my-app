import React from "react";
import Header from "../../Component/Header";
import HeroSection from "../../Component/HeroSection";
import CategoryBooks from "../../Component/CategoryBooks";
import ProductsList from "../../Component/ProductsList";
import Footer from "../../Component/Footer";
import { Nav, Container, Card } from 'react-bootstrap';

const Home = () => {

  const data = [
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1523742534376-dc6574ed1bd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1601814923439-619b33ffa31d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1487523117656-d5d117ad47c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1614696642337-d022f64489ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1608176762555-630f3f6517c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1476056583976-4227e8c93948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: "Hai1",
      status: "NEW",
      price: "Rp 200.000",
      image_url:
        "https://images.unsplash.com/photo-1613417668910-98edb18f6e5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <CategoryBooks />
      <div style={{ marginBottom: "20px" }}>
        <Container>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              {/* <Nav.Link href="/home">NEW</Nav.Link> */}

              <Nav.Link eventKey="link-1">NEW</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">BEST SELLER</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">HARD TO FIND</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4">DEALS OF THE WEEK</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
      <ProductsList data={data} />
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
      <Footer />
    </div>
  );
};

export default Home;
