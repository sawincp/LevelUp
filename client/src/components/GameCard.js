import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


const GameCard = ({ games }) => {

  console.log(games)

  return (
    <Row xs={1} md={2} className="g-4">
      {games.map((game)=>(
      <Col>
        <Card>
          <Card.Img variant="top" src={game.cover_art} className='img-thumbnail' style={{ width: '300px', height: '200px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Text style={{color: 'black'}}>
              Release date: {game.release_date}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      ))}
  </Row>
  )
}

export default GameCard
