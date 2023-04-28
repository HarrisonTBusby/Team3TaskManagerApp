import React from 'react'
import { Row, Col, Modal, Button, Container, Dropdown } from 'react-bootstrap';
import './CreateTaskStyle.css'
import { useState } from 'react';

export default function CreateTaskModal() {

  const [priority, setPriority] = useState('');

  function highPriority(){
    setPriority("High");
  }
  function mediumPriority(){
    setPriority("Medium");
  }
  function lowPriority(){
    setPriority("Low");
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >

      <Container className='Max'>
        <Modal.Dialog>

          <Modal.Header className='title-cente' closeButton>
            <Row>
              <Col><Modal.Title>Task Name</Modal.Title></Col>
              <Col><input type='text' className='nameInput'></input></Col>
            </Row>
          </Modal.Header>

          <Row className='basicInfoLeft'>
            <Col><h4>Due Date</h4></Col>
            <Col><input type='date' className='dateInput'></input></Col>
            <Col><h4>Priority</h4></Col>
            <Col><Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">{priority}</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">High</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={highPriority}>Medium</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown></Col>
          </Row>

          <div className='headerline'>
            <Modal.Header></Modal.Header>
          </div>


          <Modal.Body className='assign-center'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum vitae voluptate consectetur eaque, quisquam tenetur ex quod nesciunt aperiam qui voluptatem nulla quibusdam ea at, illum culpa dolorem sunt!</p>
          </Modal.Body>

          <Row>
            <Col className='edit-Button'>
              <Button className='btn-danger'>Delete</Button>
              <p className=''>.</p>
              <Button className='btn-success'>Edit</Button>
            </Col>
          </Row>

        </Modal.Dialog>
      </Container>
    </div>
  )
}
