import React, {useState} from 'react'
import './Login.css';
import { Form, Button } from 'react-bootstrap/';
const axios = require("axios");

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", email, password, "line 11")
    axios.post('http://localhost:3001/auth/login',{
      email,
      password
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        console.log("Selesai Fetch")
        setEmail("");
        setPassword("");
      });
  }

  return (
    <div>
      <h3>Login Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login
