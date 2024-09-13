
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from '../common/PrivateRoute'
const RoutesComponent = () => {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <PrivateRoute path="/todos" element={<TodoPage />} />
      </Routes>
    );
  };
  
  export default RoutesComponent;