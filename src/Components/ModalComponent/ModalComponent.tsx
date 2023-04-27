import React from 'react'
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import './ModalStyle.css'

export default function ModalComponent() {
  return (
    <Container className='Max'>
      <Modal.Dialog>
        <Modal.Header className='title-center'>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Row>
          <Col className='basicInfoLeft col-7'>
            <p>Assigned to: [Admin User]</p>
            <p>Due: 19/23/28</p>
          </Col>

          <Col  className='basicInfo col-4'>
            <p>Priority: medium</p>
          </Col>
        </Row>

        <Modal.Body className='assign-center'>
          <p>Assigned by: [Admin User]</p>
        </Modal.Body>

        <Modal.Body className='assign-center'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nisi et quasi repudiandae commodi quis, eni...</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
  )
}
