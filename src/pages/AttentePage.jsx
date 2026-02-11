import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DayCountdown from '../components/DayCountdown';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const AttentePage = () => {
    const [showVideo, setShowVideo] = useState(false);

    const days = [
        {
            day: 1,
            targetDate: '2026-03-24T20:00:00+03:00',
            imageUrl: 'https://res.cloudinary.com/djillj6xt/image/upload/v1770799530/J1_hw2rdx.png',
            link: 'https://google.com',
        },
        {
            day: 2,
            targetDate: '2026-03-25T20:00:00+03:00',
            imageUrl: 'https://res.cloudinary.com/djillj6xt/image/upload/v1770799529/J2_spp2dg.png',
            link: 'https://google.com',
        },
        {
            day: 3,
            targetDate: '2026-03-26T20:00:00+03:00',
            imageUrl: 'https://res.cloudinary.com/djillj6xt/image/upload/v1770799532/J3_o7aecb.png',
            link: 'https://google.com',
        },
        {
            day: 4,
            targetDate: '2026-03-27T20:00:00+03:00',
            imageUrl: 'https://res.cloudinary.com/djillj6xt/image/upload/v1770799531/J4_tsolg3.png',
            link: 'https://google.com',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const handleAvantGoutClick = () => {
        setShowVideo(true);
        window.open('https://taap.it/daoxkcc', '_blank');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                py: 8,
                background: 'linear-gradient(180deg, #0012f6 0%, #00163b 100%)',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            mb: 2,
                            color: '#fff',
                            fontWeight: 900,
                            textShadow: '0 0 30px rgba(255, 228, 0, 0.3)',
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        🎯 MASTERCLASS{' '}
                        <span style={{ color: '#ffe400' }}>PROJET MDA</span>
                    </Typography>

                    <Typography
                        variant="h5"
                        align="center"
                        sx={{
                            mb: 8,
                            color: 'rgba(255,255,255,0.8)',
                            fontWeight: 400,
                            fontSize: { xs: '1.2rem', md: '1.5rem' },
                        }}
                    >
                        4 jours pour transformer ton business
                    </Typography>
                </motion.div>

                {/* Vidéo Avant Goût */}
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box
                            sx={{
                                mb: 6,
                                borderRadius: 4,
                                overflow: 'hidden',
                                boxShadow: '0 20px 60px rgba(255, 228, 0, 0.4)',
                                border: '3px solid #ffe400',
                            }}
                        >
                            <video
                                autoPlay
                                controls
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                }}
                            >
                                <source
                                    src="https://res.cloudinary.com/djillj6xt/video/upload/v1770830919/0132_kqoeya.mp4"
                                    type="video/mp4"
                                />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>
                        </Box>
                    </motion.div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Grid container spacing={4}>
                        {days.map((dayInfo, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div variants={itemVariants}>
                                    <DayCountdown
                                        day={dayInfo.day}
                                        targetDate={dayInfo.targetDate}
                                        imageUrl={dayInfo.imageUrl}
                                        link={dayInfo.link}
                                    />
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>

                {/* Bouton Avant Goût */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <Box
                        sx={{
                            mt: 6,
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<PlayArrowIcon sx={{ fontSize: '2rem !important' }} />}
                                onClick={handleAvantGoutClick}
                                sx={{
                                    py: 2.5,
                                    px: 6,
                                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                                    fontWeight: 900,
                                    background: 'linear-gradient(135deg, #ffe400 0%, #ffed4d 100%)',
                                    color: '#000',
                                    boxShadow: '0 10px 40px rgba(255, 228, 0, 0.5)',
                                    borderRadius: 50,
                                    letterSpacing: '0.05em',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #ffed4d 0%, #ffe400 100%)',
                                        boxShadow: '0 15px 50px rgba(255, 228, 0, 0.6)',
                                    },
                                }}
                            >
                                🎬 RÉCLAMER MON BONUS ET S'ABONNER
                            </Button>
                        </motion.div>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <Box
                        className="glass"
                        sx={{
                            mt: 8,
                            p: 4,
                            textAlign: 'center',
                            backdropFilter: 'blur(200px)',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 2,
                                color: '#ffe400',
                                fontWeight: 700,
                            }}
                        >
                            📅 Programme du Masterclass
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'rgba(255,255,255,0.9)',
                                lineHeight: 1.8,
                            }}
                        >
                            Chaque soir à 20h00 (GMT+3), rejoins-nous pour découvrir les
                            secrets du Projet MDA. Les lives seront débloqués
                            automatiquement à l'heure prévue. Prépare-toi à prendre des
                            notes et à passer à l'action !
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <Box
                        sx={{
                            mt: 6,
                            p: 4,
                            background: 'linear-gradient(135deg, #ff0000 0%, #ffe400 100%)',
                            borderRadius: 4,
                            textAlign: 'center',
                            boxShadow: '0 10px 40px rgba(255, 0, 0, 0.3)',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 2,
                                color: '#000',
                                fontWeight: 900,
                                fontSize: { xs: '1.5rem', md: '2rem' },
                            }}
                        >
                            🔥 À TRÈS BIENTÔT !
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#000',
                                fontWeight: 500,
                                fontSize: { xs: '1rem', md: '1.2rem' },
                            }}
                        >
                            Garde cette page en favori pour accéder aux lives
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default AttentePage;