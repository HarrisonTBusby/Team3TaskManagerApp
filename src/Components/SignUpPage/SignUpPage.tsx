import React from "react";
import { Row, Col, Button} from "react-bootstrap";
import './SignUpPage.css';


export default function SignUpPage() {

  return (
    <>
      <div className="backgroundColorPage">
        <Row>
          <Col>
            <div className="">
              <h1 className="headerTitle fontShadow">Task Master</h1>
            </div>
            <div className="">
              <h1 className="">Sign Up</h1>
            </div>
            <div className="">
              <input></input>
            </div>
            <div className="">
              <input></input>
            </div>
            <div className="">
              <input></input>
            </div>
            <div className="">
              <Button></Button>
              <p>Admin Account</p>
            </div>
            <div className="">
              <Button>Create Account</Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}