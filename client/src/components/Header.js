import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Logo from '../images/logo.png'

function Header() {

  return (
    <Container>
      <Row className="align-items-center my-5">
        <Col sm={2}>
          <img src= {Logo} alt= "Logo" style={{maxWidth: '100%'}}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
