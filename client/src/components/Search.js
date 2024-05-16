import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";

import NewGame from "./NewGame";

function Search({ games, searchTerm, onSearchChange, onAddNewGame }) {
  const [modalShow, setModalShow] = useState(false);

  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <Container>
      <Form className="search-form">
        <Row xl={3}>
          <Col>
            <Form.Group>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="search"
                  value={searchTerm}
                  onChange={handleChange}
                ></Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col>
            <Button onClick={() => setModalShow(true)}>Add Game</Button>
          </Col>
        </Row>
      </Form>
      
      <NewGame games={games} onAddNewGame={onAddNewGame} show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
}

export default Search;
