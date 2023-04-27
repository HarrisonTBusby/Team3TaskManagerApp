import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardComponent.css"

export default function CardComponent(props: any) {

  
            // <CardComponent
            // title={"Test Title"}
            // date={"test date"}
            // priority={"test priority"}
            // assigned={"test assign"}
            // description={"test description"}
            // />

  return (
    <div className=''>

    <Card style={{ width: '30vw', marginLeft: "-195px", marginTop: "10px" }} className='cardFont'>
      <Card.Body style={{padding: '0px'}}>
        <Card.Title className='d-flex justify-content-center' style={{backgroundColor: '#23806D'}}>{props.title}</Card.Title>
        <div className='d-flex justify-content-around'>
        <p className="">Due: {props.date}</p>
        <p className="">Priority: {props.priority}</p>
        </div>
    <div className='d-flex justify-content-center'>
        <p className="">Assigned By: {props.assigned}</p>
    </div>
        <Card.Text style={{backgroundColor: '#23806D'}}>
        {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}
