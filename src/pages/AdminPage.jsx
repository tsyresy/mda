import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  CircularProgress,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { motion } from 'framer-motion';
import { supabase } from '../utils/supabase';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';

const AdminPage = () => {
  const navigate = useNavigate();
  const [inscriptions, setInscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchInscriptions();
  }, [navigate]);

  const fetchInscriptions = async () => {
    try {
      const { data, error } = await supabase
        .from('inscriptions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setInscriptions(data || []);
    } catch (error) {
      console.error('Error fetching inscriptions:', error);
      alert('Erreur lors du chargement des données');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/login');
  };

  const columns = [
    {
      field: 'nom_complet',
      headerName: 'Nom Complet',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'numero_telephone',
      headerName: 'Numéro Téléphone',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'created_at',
      headerName: 'Date d\'inscription',
      flex: 1,
      minWidth: 180,
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleString('fr-FR');
      },
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 4,
        background: 'linear-gradient(180deg, #0012f6 0%, #00163b 100%)',
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PeopleIcon sx={{ fontSize: 40, color: '#ffe400' }} />
              <Typography
                variant="h3"
                sx={{
                  color: '#fff',
                  fontWeight: 900,
                }}
              >
                DASHBOARD ADMIN
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                fontWeight: 700,
              }}
            >
              DÉCONNEXION
            </Button>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            className="glass"
            sx={{
              p: 3,
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                mb: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#ffe400',
                  fontWeight: 700,
                }}
              >
                📊 Liste des Inscriptions
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: '#fff',
                  background: 'rgba(255, 228, 0, 0.2)',
                  padding: '8px 20px',
                  borderRadius: 3,
                  fontWeight: 700,
                }}
              >
                Total: {inscriptions.length}
              </Typography>
            </Box>

            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 400,
                }}
              >
                <CircularProgress sx={{ color: '#ffe400' }} size={60} />
              </Box>
            ) : (
              <Box
                sx={{
                  height: 600,
                  width: '100%',
                  '& .MuiDataGrid-root': {
                    border: 'none',
                    color: '#fff',
                  },
                  '& .MuiDataGrid-cell': {
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  },
                  '& .MuiDataGrid-columnHeaders': {
                    backgroundColor: 'rgba(255, 228, 0, 0.1)',
                    borderBottom: '2px solid #ffe400',
                    color: '#ffe400',
                    fontWeight: 700,
                  },
                  '& .MuiDataGrid-footerContainer': {
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                  },
                  '& .MuiTablePagination-root': {
                    color: '#fff',
                  },
                  '& .MuiDataGrid-row:hover': {
                    backgroundColor: 'rgba(255, 228, 0, 0.05)',
                  },
                }}
              >
                <DataGrid
                  rows={inscriptions}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[10, 25, 50]}
                  disableSelectionOnClick
                  autoHeight
                  sx={{
                    '& .MuiDataGrid-virtualScroller': {
                      minHeight: '400px',
                    },
                  }}
                />
              </Box>
            )}
          </Paper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box
            className="glass"
            sx={{
              mt: 4,
              p: 3,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.6)',
              }}
            >
              Projet MDA - Dashboard Administrateur | Dernière mise à jour:{' '}
              {new Date().toLocaleString('fr-FR')}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AdminPage;
