import React from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponent from "../Card/CardComponent";
import "./HomePage.css";

export default function HomePage() {

  let navigate = useNavigate();
  return (
    <body>
      <div className="homePageBackground">
        <Container>
          <Row>
            <div className="d-flex justify-content-center">
              <div className="headerFontSize">Task Master</div>
              <button className="signOutBtn" onClick={() => navigate('/')}>
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
            <CardComponent/>
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
