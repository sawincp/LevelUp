import React from 'react'
import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/Image";

import User from "../images/user.png";
import Play from "../images/play.png";
import Tv from "../images/tv.png";

function Nav() {
  
  const imageStyle = { width: "30px", height: "30px" };

  return (
    <>
      <NavBar className="big-body-tertiary">
        <Container>
          <Col>
            <Row>
              <NavBar.Brand>
                <NavLink to="/">
                  <Image src={User} style={imageStyle} />
                </NavLink>
              </NavBar.Brand>
            </Row>
            <Row>
              <NavBar.Brand>
                <NavLink to="/games">
                  <Image src={Play} style={imageStyle} />
                </NavLink>
              </NavBar.Brand>
            </Row>
            <Row>
              <NavBar.Brand>
                <NavLink to="/consoles">
                  <Image src={Tv} style={imageStyle} />
                </NavLink>
              </NavBar.Brand>
            </Row>
          </Col>
        </Container>
      </NavBar>
    </>
  );
}

export default Nav