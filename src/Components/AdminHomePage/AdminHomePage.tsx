import React, { useState } from 'react'
import { Row, Col, Container, Card, Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminHomePage.css';
import CardComponent from '../Card/CardComponent';
import CreateTaskModal from '../ModalComponent/CreateTaskModal/CreateTaskComponent';
import { useNavigate } from 'react-router';

export default function AdminHomePage() {

  // function CreateTask() {
  //   setShow(true);
  // }

  const navigate = useNavigate();
  const [Admin, setAdmin] = useState(false);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);

  function TaskModalClose() {
    setShowCreateTaskModal(false);
  }

  function TaskModalOpen() {
    setShowCreateTaskModal(true);
  }

  let userData = {
    Id: 0,
    Admin,
    Username,
    Password,
    confirmPassword

}

  let handleSignOut = () => {
    if(userData !== null){
      setAdmin(false);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      navigate('/');
      console.log(userData);
      return userData;
    }
  }
  
  return (
    <body>
      <CreateTaskModal show={showCreateTaskModal} onClose={TaskModalClose} />
      <div className='homePageBackground'>

        <Container>
          <Row className='d-flex justify-content-between'>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className='headerFontSize'>Task Master</div>
              <button className='createTasksBtn' onClick={TaskModalOpen}><u>Create Tasks</u></button>
              <Dropdown className='userBtn'>
                <Dropdown.Toggle style={{backgroundColor: 'transparent', border:'none', fontSize:'40px'}} id="dropdown-basic">
                  <u>Users</u>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Placeholder</Dropdown.Item>
                  <Dropdown.Item>Placeholder</Dropdown.Item>
                  <Dropdown.Item>Placeholder</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            <button className='settingsBtn'><u>Settings</u></button>
            <button className='signOutBtn' onClick={handleSignOut}><u>Sign out</u></button>

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
          <Row className="taskRow">

          <CardComponent
            title={"Test Title"}
            date={"test date"}
            priority={"Medium"}
            assigned={"test assign"}
            description={"We are working on a app that is designed to track tasks. These tasks will have: a title, description, due date, the admin who assigned it, and priority of the task. A proto..."}
            />
            </Row>
          </div>
          <div className="inProgressText">In Progress:</div>
          <div className='adminTaskBox'>
          <Row className="taskRow">
          <CardComponent
            title={"Test Title"}
            date={"test date"}
            priority={"High"}
            assigned={"test assign"}
            description={"We are working on a app that is designed to track tasks. These tasks will have: a title, description, due date, the admin who assigned it, and priority of the task. A proto..."}
            />
          </Row>
          </div>
          <div className="completedText">Complete:</div>
          <div className='adminTaskBox'>
          <Row className="taskRow">
          <CardComponent
            title={"Test Title"}
            date={"test date"}
            priority={"Low"}
            assigned={"test assign"}
            description={"We are working on a app that is designed to track tasks. These tasks will have: a title, description, due date, the admin who assigned it, and priority of the task. A proto..."}
            />
          </Row>
          </div>
          </Row>
        </Container>
     
    </div>
  </body >
  )
}
