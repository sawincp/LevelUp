import React from "react";
import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../state/atoms/UserState";
// import { Link } from "react-router-dom";
// import NavBar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";
// import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";

// import User from "../images/user.png";
// import Play from "../images/play.png";
// import Tv from "../images/tv.png";

function Profile() {
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

  // const imageStyle = { width: "30px", height: "30px" };

  return (
    <>
    <h1>Profile</h1>
      {/* <NavBar className="big-body-tertiary">
        <Container>
          <Col>
            <Row>
              <NavBar.Brand>
                <Link to="/profile">
                  <Image src={User} style={imageStyle} />
                </Link>
              </NavBar.Brand>
            </Row>
            <Row>
              <NavBar.Brand>
                <Link to="/games">
                  <Image src={Play} style={imageStyle} />
                </Link>
              </NavBar.Brand>
            </Row>
            <Row>
              <NavBar.Brand>
                <Link to="/consoles">
                  <Image src={Tv} style={imageStyle} />
                </Link>
              </NavBar.Brand>
            </Row>
          </Col>
        </Container>
      </NavBar> */}
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
}

export default Profile;
