import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer React et React-DOM
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Séparer Material-UI
          'mui-vendor': [
            '@mui/material',
            '@mui/icons-material',
            '@emotion/react',
            '@emotion/styled'
          ],
          // Séparer MUI DataGrid
          'mui-datagrid': ['@mui/x-data-grid'],
          // Séparer Framer Motion
          'framer-motion': ['framer-motion'],
          // Séparer date-fns
          'date-fns': ['date-fns'],
          // Séparer Supabase
          'supabase': ['@supabase/supabase-js']
        }
      }
    },
    chunkSizeWarningLimit: 600 // Augmenter légèrement la limite
  }
})
