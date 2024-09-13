import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
      <img src='https://www.iconarchive.com/download/i99584/blackvariant/button-ui-requests-5/ToDo-List.1024.png' alt="Todo App Logo"
          style={{ width: '40px', height: '40px', marginRight: '10px' }} />
      </Box>
      
        
      {user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
            <IconButton color="inherit" onClick={() => navigate('/login')}>
              <Avatar>{user.name[0]}</Avatar>
            </IconButton>
            <Button color="inherit" onClick={logout} >
              Logout
            </Button>
          </Box>
        ) : (
          <Button color="inherit" onClick={() => navigate('/login')} sx={{ ml: 'auto' }}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
