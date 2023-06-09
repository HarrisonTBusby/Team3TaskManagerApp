import {useState} from "react";
import { Row, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { createUserAccount } from "../../Services/DataService";
import "./SignUpPage.css";

export default function SignUpPage() {

    const [Username, setUsername] = useState('');
    const [Admin, setAdmin] = useState(false);
    const [Password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        let userData = {
            Id: 0,
            isAdmin : Admin,
            Username,
            Password,
          }
        if(Password !== confirmPassword){
          
          const message = 'Please match passwords.'
          alert(message);
        }else{
          console.log(userData);
          createUserAccount(userData);
          navigate('/');
        }

        


    }


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
                  onChange={({target: {value}}: any) => setUsername(value)}
                  required
                />
              </div>
              {/* Password Input */}
              <div className="mt-5 d-flex justify-content-center">
                <input
                  type="password"
                  placeholder="Password"
                  className="inputFont"
                  onChange={({target: {value}}: any) => setPassword(value)}
                  required
                />
              </div>
              <div className="mt-5 d-flex justify-content-center">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="inputFont"
                  onChange={({target: {value}}: any) => setConfirmPassword(value)}
                  required
                />
              </div>

              <div className="mt-5 d-flex justify-content-center">
                <input className="form-check-input right-marg" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." onClick={() => setAdmin(true)}/>
                <p className="">Admin Account</p>
              </div>

              {/* Create button */}
              <div className="mt-5 my-1 d-flex justify-content-center">
                <button className="loginBtn" onClick={handleSubmit}><u>Create Account</u></button>
              </div>



            </Row>
          </div>
        </Row>
      </div>
    </>
  );
  
  }