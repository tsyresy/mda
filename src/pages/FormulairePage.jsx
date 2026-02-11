import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FormulairePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nom_complet: '',
    numero_telephone: '+261',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom_complet.trim()) {
      newErrors.nom_complet = 'Le nom complet est requis';
    }

    if (!formData.numero_telephone || formData.numero_telephone === '+261') {
      newErrors.numero_telephone = 'Le numéro de téléphone est requis';
    } else if (formData.numero_telephone.length < 13) {
      newErrors.numero_telephone = 'Numéro de téléphone invalide';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est requise";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Adresse email invalide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('inscriptions')
        .insert([formData]);

      if (error) {
        throw error;
      }

      setShowSuccessDialog(true);

      setTimeout(() => {
        navigate('/attente');
      }, 4000);
    } catch (error) {
      console.error('Error inserting data:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0012f6 0%, #00163b 50%, #0012f6 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 228, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 0, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(0, 18, 246, 0.2) 0%, transparent 50%)
          `,
          animation: 'gradientShift 25s ease infinite',
          filter: 'blur(200px)',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            className="glass metallic-gradient"
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 4,
              backdropFilter: 'blur(200px)',
              WebkitBackdropFilter: 'blur(200px)',
              boxShadow: `
                0 8px 32px 0 rgba(0, 18, 246, 0.3),
                0 4px 16px 0 rgba(255, 228, 0, 0.2),
                0 2px 8px 0 rgba(255, 0, 0, 0.15),
                inset 0 0 100px rgba(255, 228, 0, 0.05)
              `,
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <Typography
              variant="h3"
              align="center"
              sx={{
                mb: 2,
                color: '#ffe400',
                fontWeight: 900,
                textShadow: '0 0 30px rgba(255, 228, 0, 0.5)',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              🚀 RÉSERVE TA PLACE
            </Typography>

            <Typography
              variant="h6"
              align="center"
              sx={{
                mb: 4,
                color: '#fff',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              Remplis le formulaire ci-dessous pour rejoindre le Masterclass
              GRATUIT Projet MDA
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Nom Complet"
                name="nom_complet"
                value={formData.nom_complet}
                onChange={handleChange}
                error={!!errors.nom_complet}
                helperText={errors.nom_complet}
                sx={{ mb: 3 }}
                required
              />

              <TextField
                fullWidth
                label="Numéro de Téléphone"
                name="numero_telephone"
                value={formData.numero_telephone}
                onChange={handleChange}
                error={!!errors.numero_telephone}
                helperText={errors.numero_telephone || 'Format: +261XXXXXXXXX'}
                sx={{ mb: 3 }}
                required
              />

              <TextField
                fullWidth
                label="Adresse Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 4 }}
                required
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
                  disabled={loading}
                  sx={{
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                    boxShadow: '0 10px 30px rgba(255, 0, 0, 0.5)',
                  }}
                >
                  {loading ? 'INSCRIPTION EN COURS...' : 'VALIDER MA RÉSERVATION'}
                </Button>
              </motion.div>

              <Typography
                variant="caption"
                align="center"
                sx={{
                  display: 'block',
                  mt: 3,
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                En t'inscrivant, tu acceptes de recevoir des informations sur le
                Masterclass Projet MDA. Tes données sont sécurisées.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>

      <Dialog
        open={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(135deg, #0012f6 0%, #00163b 100%)',
            border: '2px solid #ffe400',
            borderRadius: 4,
            backdropFilter: 'blur(200px)',
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', pt: 4 }}>
          <CheckCircleIcon
            sx={{
              fontSize: 80,
              color: '#ffe400',
              mb: 2,
            }}
          />
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center', pb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              color: '#fff',
              fontWeight: 900,
            }}
          >
            🎉 FÉLICITATIONS !
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: '#ffe400',
            }}
          >
            Merci pour ton inscription !
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7,
            }}
          >
            Ta place pour le Masterclass Projet MDA est confirmée. Tu vas être
            redirigé vers la page d'attente dans quelques secondes...
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default FormulairePage;
