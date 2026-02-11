import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const CountdownTimer = ({ initialMinutes = 59, initialSeconds = 59 }) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(timer);
          return prevTime;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        padding: '20px 40px',
        background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.2) 0%, rgba(255, 228, 0, 0.2) 100%)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: '2px solid rgba(255, 0, 0, 0.3)',
        boxShadow: '0 8px 32px rgba(255, 0, 0, 0.3)',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#ffe400', textShadow: '0 0 20px rgba(255, 228, 0, 0.5)' }}>
          {formatTime(time.hours)}
        </Typography>
        <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.7rem' }}>
          HEURES
        </Typography>
      </Box>
      <Typography variant="h3" sx={{ fontWeight: 900, color: '#fff' }}>:</Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#ffe400', textShadow: '0 0 20px rgba(255, 228, 0, 0.5)' }}>
          {formatTime(time.minutes)}
        </Typography>
        <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.7rem' }}>
          MINUTES
        </Typography>
      </Box>
      <Typography variant="h3" sx={{ fontWeight: 900, color: '#fff' }}>:</Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 900, color: '#ffe400', textShadow: '0 0 20px rgba(255, 228, 0, 0.5)' }}>
          {formatTime(time.seconds)}
        </Typography>
        <Typography variant="caption" sx={{ color: '#fff', fontSize: '0.7rem' }}>
          SECONDES
        </Typography>
      </Box>
    </Box>
  );
};

export default CountdownTimer;
