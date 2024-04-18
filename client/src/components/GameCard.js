import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useSpring, animated } from "@react-spring/web";

const GameCard = ({ games }) => {
  // console.log(games)

  const [flipped, setFlipped] = useState(false);

  const handleClick = (gameId) => {
    setFlipped((prevState) => !prevState); // Toggle flipped state on click
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
      {games.map((game) => (
        <Col key={game.id}>
          <animated.div
            onClick={() => handleClick(game.id)}
            style={{ transform, opacity }}
          >
            <Card>
              <Card.Body>
                {flipped ? (
                  // Content for the back of the card
                  <div>
                    <h2>Back of {game.title}</h2>
                    <li>{game.comment}</li>
                  </div>
                ) : (
                  <>
                    <Card.Img
                      variant="top"
                      src={game.cover_art}
                      className="img-thumbnail"
                      style={{
                        width: "500px",
                        height: "600px",
                        objectFit: "cover",
                      }}
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
