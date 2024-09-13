import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signUp = (userData) => {
    console.log('User Data:', userData); 
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Successfully signed up!');
    navigate('/login'); 
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      alert('Successfully logged in!');
      navigate('/todos');
    } else {
      alert('Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;