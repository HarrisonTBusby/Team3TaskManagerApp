import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardComponent.css"

export default function CardComponent() {
  return (
    <div className=''>
    <Card style={{ width: '30vw' }} className='cardFont'>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center' style={{backgroundColor: 'green'}}>Task Title</Card.Title>
        <div>
        <p className="">Due: date   Priority:</p>
        </div>
        <Card.Text style={{backgroundColor: 'green'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
