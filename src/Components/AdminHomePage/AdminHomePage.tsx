import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHomePage.css';
import CardComponent from '../Card/CardComponent';

export default function AdminHomePage() {
  return (
    <body>
    <div className='homePageBackground'>

      <Container>
      <Row className='d-flex justify-content-between'>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className='headerFontSize'>Task Master</div>
        <button className='createTasksBtn'><u>Create Tasks</u></button>
        <button className='userBtn'><u>Users</u></button>
        <button className='settingsBtn'><u>Settings</u></button>
        <button className='signOutBtn'><u>Sign out</u></button>

      </div>
      </Row>
      </Container>

      <Container>
      <Row className="mt-5">
        <div className='userTaskFontSize'>[Placeholder] has 1 Task In Progress</div>
      </Row>
      </Container>
      
      <Container className='taskContainer'>
          <Row className='d-flex justify-content-around'>

          <div className="toDoText">To Do:</div>
          <div className='adminTaskBox'>
            <CardComponent/>
          </div>
          <div className="inProgressText">In Progress:</div>
          <div className='adminTaskBox'></div>
          <div className="completedText">Complete:</div>
          <div className='adminTaskBox'></div>
          </Row>
        </Container>
     
    </div>
  </body>
  )
}
