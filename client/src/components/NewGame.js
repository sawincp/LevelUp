import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Modal from 'react-bootstrap/Modal';

function NewGame(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
         <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add your Game!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col xs={12} md={8}>
              Title:
            </Col>
            <Col xs={6} md={4}>
              Cover Art Link:
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              Release Date:
            </Col>
            <Col xs={6} md={4}>
              Genre:
            </Col>
            <Col xs={6} md={4}>
             Comment:
            </Col>
            <Col xs={6} md={4}>
             YouTube Link:
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
        </Modal>
      );
    }    

export default NewGame
