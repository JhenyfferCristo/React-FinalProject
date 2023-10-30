import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Home } from './pages/home';
import { NavBar } from './NavBar';
import { Admnistration } from './pages/admPage';
import { Student } from './pages/studentPage';
import { UserProvider, useUserContext } from './context/UserProvider';
import AddCourse from './pages/addCourse';

function AdmRoutes() {
  const { user, isUserLoggedIn } = useUserContext();
  if (isUserLoggedIn() && user.role === 'admin') {
    return <Outlet />;
  }
  return <Navigate to="/" />;
}

function StudentRoutes() {
  const { user, isUserLoggedIn } = useUserContext();
  if (isUserLoggedIn() && user.role === 'student') {
    return <Outlet />;
  }
  return <Navigate to="/" />;
}

function LogedOutUserOnly({ children }) {
  const { isUserLoggedIn } = useUserContext();
  if (!isUserLoggedIn()) {
    return children;
  }
  return <Navigate to="/" />;
}


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
        <Route path="AddCourse" element={<AddCourse />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
