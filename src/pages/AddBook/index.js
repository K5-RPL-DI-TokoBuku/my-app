import React, {useState} from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { productService } from "../../services";


const AddBook = () => {
  const [pengarang, setPengarang] = useState("")
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [quantity, setQuantity] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [info, setInfo] = useState("")



  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Fetch To API
    if (title.length > 0) {
      let data = {
        name: title,
        author: pengarang,
        image_link: image,
        description,
        category,
        price,
        quantity,
      }

      console.log(data)
      productService.createProduct(data).then((res) => {
        setInfo("success")
        setTitle("")
        setPengarang("")
        setImage("")
        setDescription("")
        setCategory("")
        setPrice("")
        setQuantity("")
        console.log(res)

      }).catch((err) => {
        setInfo("error")
      })
    } else {
      setInfo("error")
    }
  }
  const handleHideInfo = () => {
    setInfo(false)
  }
  return (
    <div>
      <div style={{ padding: "20px 0" }}>
        <Container>
          <div>
            {info && (
              <div style={{cursor: 'pointer'}} onClick={handleHideInfo}>
                <Alert variant={info === "success" ? "success" : "danger" }>
                  {info === "success" ? "Success Add Buku" : "Failed to add buku" }
                </Alert>
              </div>
            )}
          </div>

          <h3>Form Add Buku {category}</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Judul Buku</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="ex. Kambing JantanRaditya Dika"
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
                placeholder="ex. Buku ini best seller comedy romance, dimana seorang manusia cinta segitiga dengan kambing. Apa yang membuat kambing jatuh cinta kepada manusia. Mungkin manusia itu memelet si kambing untuk mencintai nya. Simak ceritanya dengan membeli buku ini."
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Pengarang</Form.Label>
                  <Form.Control
                    value={pengarang}
                    onChange={(e) => setPengarang(e.target.value)}
                    type="text"
                    placeholder="ex. Raditya Dika"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Category</Form.Label>
                  <Form.Control as="select" value={category} onChange={(e) => {
                    // console.log(e.target.value)
                    setCategory(e.target.value)
                  }}>
                    <option value="Algorithm">Algorithm</option>
                    <option value="Data Structure">Data Structure</option>
                    <option value="Programming">Programming</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Others">Others</option>
                  </Form.Control>
                  {/* <Form.Control
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    placeholder="Enter category"
                  /> */}
                </Form.Group>

              </Col>
            </Row>


            
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
                  <div style={{display: 'flex'}}>
                    {/* <Button variant="danger">-</Button> */}
                    <Form.Control
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      type="number"
                      placeholder="Enter quantity"
                    />
                    

                    {/* <Button variant="primary">X</Button> */}

                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="formBasicEmail">
              {/* <Form.File
                id="exampleFormControlFile1"
                label="Input Image Here"
                value={image}
                onChange={(e) => {
                  console.log(e.target.files[0])
                  setImage(e.target.files[0])
                }}
              /> */}
              <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Enter Image"
            />
            </Form.Group>
            {/* <Form.Control
              type="text"
              placeholder="Your image must be less than 2000kb"
              readOnly
            /> */}
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
