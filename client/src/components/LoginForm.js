import React, { useState } from "react";
import axios from 'axios'
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

function LoginForm() {
  const [currentUser, setCurrentUser]= useState()
  
  const [validated, setValidated]= useState(false)

  const handleSubmit = (e)=>{
      const form = e.currentTarget
      if(form.checkValidity() === false){
          e.preventDefault()
          e.stopPropagation()
      }
      setValidated(true)
  }


return (
  <>
    <Container className="d-flex align-items-center justify-content-center h-50">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <InputGroup>
              <Form.Control type="text" placeholder="Username" required />
              <Form.Control.Feedback type="invalid">
                Please Enter Username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustomPassword">
            <InputGroup>
              <Form.Control type="password" placeholder="Password" required />
              <Form.Control.Feedback type="invalid">
                Please Enter Password.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit">Log In</Button>
      </Form>
    </Container>
  </>
);
}

export default LoginForm;
