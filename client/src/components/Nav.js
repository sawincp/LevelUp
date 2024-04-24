import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
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
          <Row>
            <NavBar.Brand>
              <NavLink to="/">
                <Image className= 'hover-img' src={User} style={imageStyle} />
              </NavLink>
            </NavBar.Brand>
          </Row>
          <Row>
            <NavBar.Brand>
              <NavLink to="/games">
                <Image className= 'hover-img' src={Play} style={imageStyle} />
              </NavLink>
            </NavBar.Brand>
          </Row>
          <Row>
            <NavBar.Brand>
              <NavLink to="/consoles">
                <Image className= 'hover-img' src={Tv} style={imageStyle} />
              </NavLink>
            </NavBar.Brand>
          </Row>
        </Container>
      </NavBar>
    </>
  );
}

export default Nav;
