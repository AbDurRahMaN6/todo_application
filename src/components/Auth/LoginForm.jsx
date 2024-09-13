import React from 'react';
import { Box, TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useAuth } from '../../context/AuthContext';
import * as Yup from 'yup';

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Password must be at least 8 characters').required('Required'),
    }),
    onSubmit: (values) => {
      login(values.email, values.password); // Call login with form values
    },
  });

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={false} sm={4} md={7}
        sx={{
          backgroundImage: 'url(https://fcit.usf.edu/florida/maps/pages/11300/f11370/i/f11370-03m.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: 3,
        }}
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <img
            src="https://www.iconarchive.com/download/i99584/blackvariant/button-ui-requests-5/ToDo-List.1024.png"
            alt="Rocket"
            style={{
              marginBottom: '20px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid white'
            }}
          />
          <Typography variant="h1">Welcome Our Slice</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Welcome to our platform! Please log in to access your dashboard.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h2" variant="h5">Sign In</Typography>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="E-mail Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, ml: 5 }}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ width: '150px', mb: 2, borderRadius: '20px' }}>
                Sign In
              </Button>
              <Button variant="outlined" fullWidth sx={{ width: '150px', mb: 2, mr: 2, borderRadius: '20px' }}
                onClick={() => navigate('/register')}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginForm;
