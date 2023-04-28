import React from 'react'
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import './ModalStyle.css'

export default function AdminModalComponent() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >

    <Container className='Max'>
      <Modal.Dialog>

        <Modal.Header className='title-cente' closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Row>
          <Col className='basicInfoLeft '>
            <p>Assigned to: [Admin User]</p>
            <p>Due: 19/23/28</p>
          </Col>

          <Col  className='basicInfo '>
            <p>Assigned by: [Admin User]</p>
            <p>Priority: medium</p>
          </Col>
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
