import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import YouTube from "react-youtube";

const GameCard = ({ games }) => {
  const [flipped, setFlipped] = useState(Array(games.length).fill(false));

  const opts = {
    height: "200",
    width: "375",
  };

  const handleClick = (gameId) => {
    const newFlipped = [...flipped];
    newFlipped[gameId] = !newFlipped[gameId];
    setFlipped(newFlipped);
  };

  console.log("Games:", games);

  return (
    <Container>
      <h1>Game Library</h1>
      <Row className="game-card-container">
        {games.map((game, index) => (
          <Col className= 'col' lg={4}>
            <div className="game-card"></div>
            <div
              className={`card-inner ${flipped[index] ? "flipped" : ""}`}
              onClick={() => handleClick(index)}
            >
              <div className="card-front">
                <Card>
                  <Card.Body className="card-body-centered">
                    <Card.Img className="card-img-top" variant="top" src={game.cover_art} />
                    <Card.Title>{game.title}</Card.Title>
                    <Card.Text style={{ color: "black" }}>
                      Release Date: {game.release_date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="card-back">
                <Card>
                  <Card.Body className="card-body-centered">
                    <div className="youtube-container">
                      <YouTube
                        className="youtube-video"
                        videoId={game.youtubeId}
                        opts={opts}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GameCard;
