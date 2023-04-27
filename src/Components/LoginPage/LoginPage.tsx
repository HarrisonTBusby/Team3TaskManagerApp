import React from "react";
import { Row, Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { GetLoginData } from "../../Services/DataService";
import "./LoginPage.css";

export default function LoginPage() {
    const navigate = useNavigate();
    GetLoginData();
    return (
        <>
            <div className="backgroundColorPage">
                <Row>
                    <div className="d-flex justify-content-center">
                        <h1 className="headerTitle fontShadow">Task Master</h1>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Row className="loginBox">

                            {/* TitleLogin */}
                            <div className="d-flex justify-content-center mt-5">
                                <h1 className="fontShadow loginTitle">Login</h1>
                            </div>

                            {/* Username Input */}
                            <div className="mt-5 d-flex justify-content-center">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="inputFont"
                                    required
                                />
                            </div>
                            {/* Password Input */}
                            <div className="mt-5 d-flex justify-content-center">
                            <input
                                    type="password"
                                    placeholder="Password"
                                    className="inputFont"
                                    required
                                />

                            </div>

                            {/* Login button */}
                            <div className="mt-5 my-1 d-flex justify-content-center">
                                <button className="loginBtn" onClick={() => navigate('/HomePage')}><u>Login</u></button>
                            </div>

                            {/* Create Account Button */}
                            <div className="my-5 d-flex justify-content-end">
                                <button className="createAccountBtn" onClick={() => navigate('/SignUpPage')}><u>Create Account?</u></button>
                            </div>
                        </Row>
                    </div>
                </Row>
            </div>
        </>
    );
}
