import React, {useState} from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Header from '../../Component/Header';


const AddBook = () => {
  const [pengarang, setPengarang] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState('false')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch To API
    if (title.length > 0) {
      alert("Hello World , Success Add Buku")
    } else {
      setError(true)

    }
  }
  const handleDeleteError = () => {
    setError(false)
  }
  return (
    <div>
      <Header />
      <div style={{ padding: "20px 0" }}>
        <Container>
          <div>
            {error && (
              <div style={{cursor: 'pointer'}} onClick={handleDeleteError}>
                <Alert variant="danger">
                  Failed to add buku
                </Alert>
              </div>
            )}
          </div>

          <h3>Form Add Buku</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Judul Buku</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter book title"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Pengarang</Form.Label>
              <Form.Control
                value={pengarang}
                onChange={(e) => setPengarang(e.target.value)}
                type="text"
                placeholder="Enter author name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Enter category"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter Description"
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    placeholder="Enter price"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="text"
                    placeholder="Enter quantity"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formBasicEmail">
              <Form.File
                id="exampleFormControlFile1"
                label="Input Image Here"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              {/* <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Enter Image"
            /> */}
            </Form.Group>
            <Form.Control
              type="text"
              placeholder="Your image must be less than 2000kb"
              readOnly
            />
            <br></br>
            <Button variant="primary" type="submit">
              Add Buku
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default AddBook;
