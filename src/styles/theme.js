import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ffffff', 
    },
    background: {
      default: '#f4f6f8', 
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1976d2', 
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#1976d2',
    },
  },
});

export default theme;
