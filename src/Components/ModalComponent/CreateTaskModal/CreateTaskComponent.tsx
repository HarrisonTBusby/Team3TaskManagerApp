import React from 'react'
import { Row, Col, Modal, Button, Container, Dropdown, Form } from 'react-bootstrap';
import './CreateTaskStyle.css'
import { useState } from 'react';

export default function CreateTaskModal(props: any) {

  const [priority, setPriority] = useState('');
  const [priorityButton, setPriorityButton] = useState('');
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function firstRun() {
    highPriority();
  }

  function highPriority() {
    setPriority("High");
  }
  function mediumPriority() {
    setPriority("Medium");
  }
  function lowPriority() {
    setPriority("Low");
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.show} onHide={props.onClose}>
        <Container className='Max taskModal'>
          <Modal.Dialog>

            <Modal.Header className='title-cente' closeButton>
              <Row>
                <Col><Modal.Title>Task Name</Modal.Title></Col>
                <Col><input type='text' className='nameInput'></input></Col>
              </Row>
            </Modal.Header>

            <Row className='basicInfoLeft'>
              <Col xs={4}><h4>Due Date:</h4></Col>
              <Col><input type='date' className='dateInput'></input></Col>
              <Col><h4>Priority:</h4></Col>
              <Col><Dropdown className='priorityButton'>
                <Dropdown.Toggle variant="danger" id="dropdown-basic">{priority}</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" onClick={highPriority}>High</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={mediumPriority}>Medium</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" onClick={lowPriority}>Low</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></Col>
            </Row>
            <Row className='mt-2'>
              <Col xs={6} className='assignTo'><h4>Assign To: </h4></Col>
              <Col xs={1}><Dropdown className='userDropdown'>
                <Dropdown.Toggle variant="info" id="dropdown-basicTwo">Users</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">User1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">User2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">User3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown></Col>
              <Col><Button variant="success">Create Task</Button></Col>
            </Row>

            <div className='headerline'>
              <Modal.Header></Modal.Header>
            </div>


            <Modal.Body className='assign-left'>
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Task Description</Form.Label>
                  <Form.Control as="textarea" rows={3} className='descriptionInput' />
                </Form.Group>
              </Form>
            </Modal.Body>

          </Modal.Dialog>
        </Container>
      </Modal>
    </div>
  )
}
