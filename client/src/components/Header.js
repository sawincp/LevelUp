import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../state/atoms/UserState";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../images/logo.png";

import Nav from "./Nav";

function Header() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [error, setError] = useState("");

  const handleLogOut = async () => {
    try {
      localStorage.removeItem("token");
      await axios.post("/logout", null, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setCurrentUser(null);
    } catch (error) {
      const errorMessage = error.response.data.errors[0];
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <Container>
      <Row className="align-items-center my-5">
        <Col sm={2}>
          <img src={Logo} alt="Logo" style={{ maxWidth: "100%" }}></img>
          <Nav />
          <Button onClick={handleLogOut}>Log Out</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
