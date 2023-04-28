import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardComponent.css"
import ModalComponent from '../ModalComponent/AdminModal/ModalComponent';

export default function CardComponent(props: any) {

  function handleClick() {
    alert("This will open a modal showing the task info");
  }

  const [color, setColor] = useState('');
            // <CardComponent
            // title={"Test Title"}
            // date={"test date"}
            // priority={"test priority"}
            // assigned={"test assign"}
            // description={"test description"}
            // />

  return (
    <div onClick={handleClick} draggable='true'>

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
        <Card.Text className='centered descr'>
        {props.description}
        </Card.Text>
      </Card.Body>
      <div className={props.priority} style={{height: '15px'}}></div>
    </Card>
    </div>
  )
}
