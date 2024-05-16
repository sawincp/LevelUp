import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../state/atoms/UserState";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from "../images/logo.png";

import Nav from "./Nav";

function Header() {
  const [currentUser, setCurrentUser] = useRecoilState(userState);
  const [error, setError] = useState("");
  const user = useRecoilValue(userState);

  const navigate = useNavigate()

  // console.log("User:", user);

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
      navigate('/')
    } catch (error) {
      const errorMessage = error.response.data.errors[0];
      console.error("Error:", errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <Container>
      <Row className="align-items-center my-5">
        <Col md={2}>
          <img src={Logo} alt="Logo" style={{ maxWidth: "100%" }}></img>
          <Nav />
          {user ? (
            <>
              <h2 style={{ marginBottom: "20px" }}>{user.username}</h2>
              <Button onClick={handleLogOut}>Log Out</Button>
            </>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
