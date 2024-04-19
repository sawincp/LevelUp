import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useSpring, animated } from "@react-spring/web";
import YouTube from "react-youtube";

const GameCard = ({ games }) => {
  console.log(games);

  const [flipped, setFlipped] = useState(Array(games.length).fill(false)); // Array of booleans to track card flip state

  const handleClick = (gameId) => {
    const newFlipped = [...flipped]; // Create a copy to avoid mutation
    newFlipped[gameId] = !newFlipped[gameId]; // Toggle flipped state for clicked card
    setFlipped(newFlipped);
  };

  const { transform, opacity } = useSpring({
    from: { opacity: 1, transform: "perspective(600px) rotateX(0deg)" }, // Initial state
    to: {
      opacity: flipped ? 1 : 1,
      transform: `perspective(600px) rotateX(${flipped ? 360 : 0}deg)`,
    }, // Flipped state
    config: { mass: 5, tension: 500, friction: 80 }, // Spring configuration
  });

  return (
    <Row xs={1} md={2} className="g-4">
      {games.map((game, index) => (
        <Col key={game.id}>
          <animated.div
            onClick={() => handleClick(index)}
            style={{ transform, opacity }}
          >
            <Card>
              <Card.Body className="card-body-centered">
                {flipped[index] ? (
                  // Content for the back of the card
                  <div>
                    <YouTube videoId={game.youtubeId} />
                    <li>{game.comment}</li>
                  </div>
                ) : (
                  <>
                    <Card.Img
                      variant="top"
                      src={game.cover_art}
                    />

                    <Card.Title>{game.title}</Card.Title>
                    <Card.Text style={{ color: "black" }}>
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
