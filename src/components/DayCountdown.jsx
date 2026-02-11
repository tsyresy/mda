import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { formatDistanceToNow, differenceInSeconds } from 'date-fns';
import { fr } from 'date-fns/locale';

const DayCountdown = ({ day, targetDate, imageUrl, link }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = differenceInSeconds(target, now);

      if (difference <= 0) {
        setIsExpired(true);
        return;
      }

      const days = Math.floor(difference / (60 * 60 * 24));
      const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((difference % (60 * 60)) / 60);
      const seconds = difference % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (value) => String(value).padStart(2, '0');

  return (
    <Card
      className="glass metallic-gradient"
      sx={{
        maxWidth: 350,
        margin: '0 auto',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(255, 228, 0, 0.3)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt={`Jour ${day}`}
        sx={{
          borderRadius: '20px 20px 0 0',
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ textAlign: 'center', padding: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            mb: 3,
            color: '#ffe400',
            textShadow: '0 0 20px rgba(255, 228, 0, 0.5)',
            letterSpacing: '0.1em',
          }}
        >
          JOUR {day}
        </Typography>

        {!isExpired ? (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 2,
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
                {formatTime(timeLeft.days)}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                JOURS
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
                {formatTime(timeLeft.hours)}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                H
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
                {formatTime(timeLeft.minutes)}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                MIN
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff' }}>
                {formatTime(timeLeft.seconds)}
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                SEC
              </Typography>
            </Box>
          </Box>
        ) : (
          <Typography variant="h6" sx={{ mb: 3, color: '#ffe400' }}>
            ✅ DISPONIBLE MAINTENANT
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          disabled={!isExpired}
          onClick={() => window.open(link, '_blank')}
          sx={{
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 800,
            opacity: isExpired ? 1 : 0.5,
            cursor: isExpired ? 'pointer' : 'not-allowed',
          }}
        >
          {isExpired ? 'ACCÉDER AU LIVE' : 'BIENTÔT DISPONIBLE'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default DayCountdown;
