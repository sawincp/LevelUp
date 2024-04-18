import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useSpring, animated } from '@react-spring/web';

const GameCard = ({ games }) => {
  const [flippedCards, setFlippedCards] = useState({}); // Object to track flipped states

  const handleClick = (gameId) => {
    setFlippedCards((prevFlippedCards) => ({ ...prevFlippedCards, [gameId]: !prevFlippedCards[gameId] })); // Toggle flip state for clicked card
  };

  return (
    <Row xs={1} md={2} className="g-4">
      {games.map((game) => (
        <Col key={game.id}>
          <animated.div onClick={() => handleClick(game.id)} style={{ transform: flippedCards[game.id] ? 'perspective(600px) rotateX(180deg)' : 'perspective(600px) rotateX(0deg)', opacity: flippedCards[game.id] ? 1 : 1 ,  config: { mass: 5, tension: 500, friction: 80 }}}>
            <Card>
              <Card.Img variant="top" src={game.cover_art} className="img-thumbnail" style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                {flippedCards[game.id] ? (
                  // Content for the back of the card
                  <div>
                    <h2>Back of {game.title}</h2>
                    <p>Additional game information...</p>
                  </div>
                ) : (
                  <>
                    <Card.Title>{game.title}</Card.Title>
                    <Card.Text style={{ color: 'black' }}>
                      Release date: {game.release_date}
                    </Card.Text>
                  </>
                )}
              </Card.Body>
            </Card>
          </animated.div>
        </Col>
      ))}
    </Row>
  );
};

export default GameCard;