import React, { useState } from "react";
import axios from "axios"
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function NewGame(props) {
  // console.log(props)
  const [game, setGame] = useState({
    title: "",
    cover_art: "",
    release_date: "",
    genre_id: "",
    comment: "",
    youtubeId: "",
    console_id: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")

    try{
      const response = await axios.post('/games', game, {
        headers:{
          Authorization: `Bearer ${token}` 
        }
      })
      if(!response.data){
        throw new Error("Game creation failed")
      }
      const createdGame = response.data
      props.onAddNewGame(createdGame)
      props.onHide(createdGame)
      setError('')
    }catch(error) {
      setError(error.message)
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
                    Release Date:
                    <Form.Control
                      type="date"
                      placeholder="Release Date"
                      name="release_date"
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <Form.Control
                      type="test"
                      placeholder="Console"
                      name="console_id"
                      onChange={handleInputChange}
                    />
                    <Form.Control
                      type="test"
                      placeholder="Genre"
                      name="genre_id"
                      onChange={handleInputChange}
                    />
                  </InputGroup>
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
                    name="youtuveId"
                    onChange={handleInputChange}
                  />
                </InputGroup>
                <Row>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="comment"
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
