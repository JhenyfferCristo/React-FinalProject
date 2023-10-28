import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Home } from './pages/home';
import { NavBar } from './NavBar';
import { Admnistration } from './pages/admPage';
import { Student } from './pages/studentPage';
import { UserProvider } from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="admPage" element={<Admnistration />} />
        <Route path="StudentPage" element={<Student />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
