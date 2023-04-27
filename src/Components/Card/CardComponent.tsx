import React from 'react'
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardComponent.css"

export default function CardComponent() {
  return (
    <div className=''>
    <Card style={{ width: '30vw' }} className='cardFont'>
      <Card.Body style={{padding: '0px'}}>
        <Card.Title className='d-flex justify-content-center' style={{backgroundColor: '#23806D'}}>Task Title</Card.Title>
        <div className='d-flex justify-content-around'>
        <p className="">Due: date</p>
        <p className="">Priority: Low</p>
        </div>
    <div className='d-flex justify-content-center'>

        <p className="">Assigned By: Jacob Dekok</p>
    </div>
        <Card.Text style={{backgroundColor: '#23806D'}}>
        We are working on a app that is designed to track tasks. These tasks will have: a title, description, due date, the admin who assigned it, and priority of the task. A proto...
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
