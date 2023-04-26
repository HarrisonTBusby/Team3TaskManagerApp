import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/SignUpPage/SignUpPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/SignUpPage' element={<SignUpPage />} />
        <Route path='/HomePage' element={<HomePage />} />
        <Route path='/AdminHomePage' element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
