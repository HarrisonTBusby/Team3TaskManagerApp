import React from 'react'
import { Row, Col, Modal, Button, Container } from 'react-bootstrap';
import './ModalStyle.css'
import { useState } from 'react';

export default function AdminModalComponent(props: any) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >

<Modal show={props.show} onHide={props.onClose}>
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

<Modal.Header></Modal.Header>

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
    </Modal>
    </div>
  )
}
