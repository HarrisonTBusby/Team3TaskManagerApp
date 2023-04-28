import { useState } from "react";
import { Row, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { GetLoginData, GetUserByUsername } from "../../Services/DataService";
import "./LoginPage.css";

export default function LoginPage(props: any) {
    const navigate = useNavigate();

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');


    const handleSubmit = async () => {
        let userData = {
            Username,
            Password
        }
        console.log(userData);
        let token = await GetLoginData(userData);
        if (token.token != null) {
            localStorage.setItem('Token', token.token);
            sessionStorage.setItem("UserData", JSON.stringify(await GetUserByUsername(Username)));
            if (props.Admin === true) {
                navigate('/AdminHomePage')
            } else {
                navigate('/Homepage')
            }

        }

    }


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
                                    onChange={({ target: { value } }: any) => setUsername(value)}
                                />
                            </div>
                            {/* Password Input */}
                            <div className="mt-5 d-flex justify-content-center">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="inputFont"
                                    required
                                    onChange={({ target: { value } }: any) => setPassword(value)}
                                />

                            </div>

                            {/* Login button */}
                            <div className="mt-5 my-1 d-flex justify-content-center">
                                <button className="loginBtn" onClick={handleSubmit}><u>Login</u></button>
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
