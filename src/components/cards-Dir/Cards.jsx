import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

function Cards({imgUrl, name, description}) {
  return <>
     <Card className='cardContainer'>
      <Card.Img variant="top" src={imgUrl} className='cardImg'/>
      <Card.Body className='cardBody'>
        <Card.Title className='cardTitle'>{name}</Card.Title>
        <Card.Text className='cardDesc'>
          {description}
        </Card.Text>
        <Button variant="primary" className='cardBtn'>Go somewhere</Button>
      </Card.Body>
    </Card>
  </>
}

export default Cards