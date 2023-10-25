import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Signup } from './pages/singup';
import { Home } from './pages/home';
import {NavBar} from './NavBar';

function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login />}/>
      <Route path="signup" element={<Signup/>}/>
    </Routes>
  </>
  );
}

export default App;
