import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import LockIcon from '@mui/icons-material/Lock';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      credentials.username === 'boss' &&
      credentials.password === 'MDA1100'
    ) {
      // Store auth token in localStorage
      localStorage.setItem('admin_token', 'authenticated');
      navigate('/admin');
    } else {
      setError('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0012f6 0%, #00163b 100%)',
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            className="glass"
            sx={{
              p: 5,
              borderRadius: 4,
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <LockIcon
                sx={{
                  fontSize: 60,
                  color: '#ffe400',
                  mb: 2,
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  color: '#fff',
                  fontWeight: 900,
                }}
              >
                ADMIN LOGIN
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  mt: 1,
                }}
              >
                Accès réservé aux administrateurs
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Nom d'utilisateur"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                sx={{ mb: 3 }}
                autoFocus
              />

              <TextField
                fullWidth
                label="Mot de passe"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                sx={{ mb: 4 }}
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #ffe400 0%, #ffed4d 100%)',
                    color: '#000',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #ffed4d 0%, #ffe400 100%)',
                    },
                  }}
                >
                  SE CONNECTER
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default LoginPage;
