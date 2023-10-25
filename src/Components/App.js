import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Signup } from './pages/singup';
import { Home } from './pages/home';

function App() {
  return (
   <Routes>
    <Route index element={<Home/>}/>
   <Route path="login" element={<Login />}/>
   <Route path="signup" element={<Signup/>}/>
   </Routes>
  );
}

export default App;
