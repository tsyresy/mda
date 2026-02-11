import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0012f6',
      dark: '#00163b',
      light: '#3344ff',
    },
    secondary: {
      main: '#ffe400',
      dark: '#ccb600',
      light: '#ffed4d',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#00163b',
      paper: 'rgba(255, 255, 255, 0.05)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Montserrat", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 900,
      fontSize: '3.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 800,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: '15px 40px',
          fontSize: '1.1rem',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #ff3333 0%, #ff0000 100%)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 15,
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.4)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffe400',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
});

export default theme;
