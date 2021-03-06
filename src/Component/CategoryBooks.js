import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './CategoryBook.css'

const CategoryBooks = () => {
  const category = [
    {
      title: "Algorithm",
      url: "https://www.youtube.com/",
    },
    {
      title: "Data Structure",
      url: "https://www.youtube.com/",
    },
    {
      title: "Programming",
      url: "https://www.youtube.com/",
    },
    {
      title: "Cyber Security",
      url: "https://www.youtube.com/",
    },
    {
      title: "Machine Learning",
      url: "https://www.youtube.com/",
    },
    {
      title: "Web Development",
      url: "https://www.youtube.com/",
    },
  ];

  const changeColor = () => {
    console.log('Succes')
  }


  return (
    <div style={{margin: '40px 0'}}>
      <Container>
        <Row>
          {category.map((e) => {
            return (
              <Col xs={4} md={4}>
                <div className="categoryStyle">
                  <p onClick={changeColor}>{e.title}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default CategoryBooks
