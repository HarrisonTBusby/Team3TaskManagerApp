import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardComponent.css"

export default function CardComponent(props: any) {

  const [color, setColor] = useState('');
            // <CardComponent
            // title={"Test Title"}
            // date={"test date"}
            // priority={"test priority"}
            // assigned={"test assign"}
            // description={"test description"}
            // />

  return (
    <div className=''>

    <Card className='cardFont cardStyle'>
      <Card.Body style={{padding: '0px'}}>
        <Card.Title className={props.priority} style={{fontSize: '40px'}}>{props.title}</Card.Title>
        <div className='d-flex justify-content-around'>
        <p className="">Due: {props.date}</p>
        <p className="">Priority: {props.priority}</p>
        </div>
    <div className='d-flex justify-content-center'>
        <p className="">Assigned By: {props.assigned}</p>
    </div>
        <Card.Text className='centered description'>
        {props.description}
        </Card.Text>
      </Card.Body>
      <div className={props.priority} style={{height: '15px'}}></div>
    </Card>
    </div>
  )
}
