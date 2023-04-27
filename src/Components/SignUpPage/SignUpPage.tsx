import React from "react";
import { Row, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./SignUpPage.css";
import ModalComponent from '../ModalComponent/ModalComponent'

export default function SignUpPage() {
  const navigate = useNavigate();
  return (
    <>

      <div className="backgroundColorPage">
        <Row>
          <div className="d-flex justify-content-center px-0">
            <h1 className="headerTitle fontShadow">Task Master</h1>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Row className="loginBox">

              {/* TitleSignUp */}
              <div className="d-flex justify-content-center mt-5">
                <h1 className="fontShadow loginTitle">Sign Up</h1>
              </div>

              {/* Username Input */}
              <div className="mt-5 d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="Username"
                  className="inputFont"
                />
              </div>
              {/* Password Input */}
              <div className="mt-5 d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="Password"
                  className="inputFont"
                />
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="inputFont"
                />
              </div>

              <div className="mt-5 d-flex justify-content-center">
                <input className="form-check-input right-marg" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/>
                <p className="">Admin Account</p>
              </div>

              {/* Create button */}
              <div className="mt-5 my-1 d-flex justify-content-center">
                <button className="loginBtn" onClick={() => navigate('/HomePage')}><u>Create Account</u></button>
              </div>


            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}
