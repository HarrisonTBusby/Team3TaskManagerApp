import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "../Card/CardComponent";
import "./HomePage.css";
import AdminModalComponent from '../ModalComponent/AdminModal/ModalComponent';
import ModalComponent from "../ModalComponent/UserModal/ModalComponent copy";

export default function HomePage() {

  const [Admin, setAdmin] = useState(false);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let navigate = useNavigate();

  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);

  function TaskModalClose() {
    // setShowCreateTaskModal(false);
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
      <AdminModalComponent show={showCreateTaskModal} onClose={TaskModalClose} ></AdminModalComponent>
      <div className="homePageBackground">
        <Container>
          <Row>
            <div className="d-flex justify-content-center">
              <div className="headerFontSize">Task Master</div>
              <button className="signOutBtn" onClick={handleSignOut}>
                <u>Sign out</u>
              </button>
            </div>
          </Row>
        </Container>

        <Container className="mt-2 d-flex justify-content-center">
          <Row>
            <div className="userTaskFontSize">
              [Placeholder] has 1 Task In Progress
            </div>
          </Row>
        </Container>
      </div>

      <Container className="taskContainer">
        <Row className="d-flex justify-content-around">
          <div className="toDoText">To Do:</div>
          <div className="taskBox">
            <Row className="taskRow">
{/* Insert To Do Task Cards Here \/ \/ \/ \/ */}
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
          <div className="taskBox">
          <Row className="taskRow">
{/* Insert In Progress Task Cards Here \/ \/ \/ \/ */}
          </Row>

          </div>
          <div className="completedText">Complete:</div>
          <div className="taskBox">
          <Row className="taskRow">
{/* Insert Completed Task Cards Here \/ \/ \/ \/ */}

          </Row>
          </div>
        </Row>
      </Container>
    </body>
  );
}
