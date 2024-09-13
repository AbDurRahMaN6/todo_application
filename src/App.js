import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodoPage from './pages/TodoPage';
import useAuth from './hooks/useAuth';

function App() {

  const { user } = useAuth();
  return (
    <Routes>
 

      <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/todos" />} />
      <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/todos" />} />
      <Route path="/todos" element={user ? <TodoPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
