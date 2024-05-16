import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import YouTube from "react-youtube";

import Search from "./Search";

const GameCard = ({ games, searchTerm, onSearchChange, onAddNewGame }) => {
    
  const [flipped, setFlipped] = useState(Array(games.length).fill(false));

  const handleClick = (gameId) => {
    const newFlipped = [...flipped];
    newFlipped[gameId] = !newFlipped[gameId];
    setFlipped(newFlipped);
  };

  const opts = {
    height: "200",
    width: "375",
  };


  return (
    <Container>
      <h1 className="game-library-header">Game Library</h1>
      
      <Search games={games} searchTerm={searchTerm} onSearchChange={onSearchChange} onAddNewGame={onAddNewGame} />
      
      <Row className="game-card-container">
        {games.map((game, index) => (
          <Col key={game.id} className="col" lg={4}>
            <div className="game-card"></div>
            <div
              className={`card-inner ${flipped[index] ? "flipped" : ""}`}
              onClick={() => handleClick(index)}
            >
              <div className="card-front">
                <Card>
                  <Card.Body className="card-body-centered">
                    <Card.Img
                      className="card-img-top"
                      variant="top"
                      src={game.cover_art}
                    />
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
                    <Card.Text className="card-text">
                      Release Date: {game.release_date}
                    </Card.Text>
                    <Card.Text className="card-text">
                      Genre: {game.genre.genre_type}
                    </Card.Text>
                    <Card.Text className="card-text">Available On:</Card.Text>
                    <Card.Img src={game.console.logo}/>
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
