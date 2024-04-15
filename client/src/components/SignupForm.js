import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../state/atoms/UserState";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

function SignupForm() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
    try {
      const response = await axios.post("/users", { user }, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      const data = response.data; // Axios automatically parses JSON response
      localStorage.setItem("token", data.jwt);
      setCurrentUser(data.user);
    } catch (error) {
      console.error("Error:", error);
      // Handle error if signup fails, e.g., display error message to the user
    }
  };

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center h-50">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomUsername">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter A Username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustomPassword">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter A Password.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Button type="submit">Sign Up!</Button>
        </Form>
      </Container>
    </>
  );
}

export default SignupForm;
