import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import OverLayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function NewGame(props) {
  const [game, setGame] = useState({
    title: "",
    cover_art: "",
    release_date: "",
    genre_id: "",
    comment: "",
    youtubeId: "",
    console_id: "",
  });

  const [consoles, setConsoles] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/consoles").then((response) => {
      setConsoles(response.data);
    });
  }, []);

  console.log("Consoles:", consoles);

  const handleInputChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post("/games", game, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data) {
        throw new Error("Game creation failed");
      }
      const createdGame = response.data;
      props.onAddNewGame(createdGame);
      props.onHide(createdGame);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Game!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="new-game">
        <Container>
          <Form>
            <Col>
              <Form.Group>
                <Row>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Game Title"
                      name="title"
                      onChange={handleInputChange}
                    />

                    <OverLayTrigger
                      placement="top"
                      overlay={<Tooltip id="date-tooltip">Relase Date</Tooltip>}
                    >
                      <Form.Control
                        type="date"
                        name="release_date"
                        onChange={handleInputChange}
                      />
                    </OverLayTrigger>
                  </InputGroup>
                </Row>
                <Row>
                  <Col>
                    <h3>Console:</h3>
                    {consoles.map((console) => (
                      <Form.Check
                        key={console.id}
                        type="checkbox"
                        id={console.id}
                        label={console.name}
                        value={console.id} // Set value to console ID
                      />
                    ))}
                  </Col>
                  <Col>
                    <h3>Genre:</h3>
                  </Col>
                </Row>
                <Row>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Cover Art Link"
                      name="cover_art"
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </Row>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="YouTube Link"
                    name="youtubeId"
                    onChange={handleInputChange}
                  />
                </InputGroup>
                <Row>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Add Comment"
                      name="comment"
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </Row>
              </Form.Group>
            </Col>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Save Game</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewGame;
