import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import ScrollBanner from '../components/ScrollBanner';
import CountdownTimer from '../components/CountdownTimer';
import {
    TrendingUp,
    AttachMoney,
    AutoAwesome,
    School,
    LockOpen,
    Rocket,
    EmojiEvents,
    Spa,
    AirlineSeatReclineExtra,
} from '@mui/icons-material';

const LandingPage = () => {
    const navigate = useNavigate();
    const [placesPercentage, setPlacesPercentage] = useState(0);

    // Calculer le pourcentage de places remplies en fonction de la date
    useEffect(() => {
        const calculatePercentage = () => {
            const startDate = new Date('2026-02-10T00:00:00'); // 10 février 2026
            const endDate = new Date('2026-03-15T00:00:00'); // 15 mars 2026
            const currentDate = new Date();

            // Si avant la date de début, retourner 0%
            if (currentDate < startDate) {
                return 0;
            }

            // Si après la date de fin, retourner 100%
            if (currentDate >= endDate) {
                return 100;
            }

            // Calculer le pourcentage
            const totalDuration = endDate - startDate;
            const elapsed = currentDate - startDate;
            const percentage = (elapsed / totalDuration) * 100;

            return Math.min(Math.max(Math.round(percentage), 0), 100);
        };

        setPlacesPercentage(calculatePercentage());
    }, []);

    // Fonction pour obtenir le message selon le pourcentage
    const getPlacesMessage = () => {
        if (placesPercentage >= 1 && placesPercentage <= 49) {
            return '✅ Place encore dispo - c\'est ta chance de la garder';
        } else if (placesPercentage >= 50 && placesPercentage <= 79) {
            return '⚡ Plus que la moitié du place libre';
        } else if (placesPercentage >= 80 && placesPercentage <= 89) {
            return '⚠️ Places limitées - Dépêche-toi !';
        } else if (placesPercentage >= 90) {
            return '🔥 Dernières places ! Ne rate pas cette opportunité';
        }
        return '✅ Place encore dispo - c\'est ta chance de la garder';
    };

    // Fonction pour obtenir la couleur selon le pourcentage
    const getPlacesColor = () => {
        if (placesPercentage >= 1 && placesPercentage <= 49) {
            return '#00ff00';
        } else if (placesPercentage >= 50 && placesPercentage <= 79) {
            return '#ffe400';
        } else if (placesPercentage >= 80 && placesPercentage <= 89) {
            return '#ff9500';
        } else if (placesPercentage >= 90) {
            return '#ff0000';
        }
        return '#00ff00';
    };

    const benefits = [
        {
            icon: <LockOpen sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Liberté Financière',
            description:
                'Découvre comment te libérer du système traditionnel et créer des sources de revenus passifs qui travaillent pour toi 24h/24.',
        },
        {
            icon: <Rocket sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Transformation Rapide',
            description:
                'En seulement 4 jours, tu auras accès à des stratégies qui ont mis des années à être perfectionnées et qui ont déjà changé des centaines de vies.',
        },
        {
            icon: <EmojiEvents sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Succès Garanti',
            description:
                'Apprends les méthodes exactes utilisées par les entrepreneurs qui génèrent 10k€+ par mois de manière récurrente et prévisible.',
        },
        {
            icon: <Spa sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Équilibre Vie-Business',
            description:
                'Construis un business qui te donne du temps libre, pas qui te l\'enlève. Travaille de n\'importe où, quand tu veux, comme tu veux.',
        },
        {
            icon: <TrendingUp sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Croissance Exponentielle',
            description:
                'Maîtrise les leviers de croissance du digital : marketing, automatisation, scaling. Les mêmes outils que les grandes entreprises utilisent.',
        },
        {
            icon: <AttachMoney sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Monétisation Multiple',
            description:
                'Ne dépends plus d\'une seule source de revenu. Crée plusieurs flux de revenus complémentaires et sécurise ton avenir financier.',
        },
        {
            icon: <AutoAwesome sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Innovation & IA',
            description:
                'Utilise les technologies de pointe et l\'intelligence artificielle pour démultiplier tes résultats sans démultiplier tes efforts.',
        },
        {
            icon: <School sx={{ fontSize: 50, color: '#ffe400' }} />,
            title: 'Formation d\'Élite',
            description:
                'Accède à un enseignement de qualité supérieure, basé sur des résultats réels et prouvés, pas sur de la théorie obsolète.',
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

    return (
        <Box>
            {/* Scroll Banner */}
            <ScrollBanner />

            {/* Hero Section - Full Width Image */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '70vh', md: '85vh' },
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Background Image - Full Width */}
                <Box
                    component="img"
                    src="https://res.cloudinary.com/djillj6xt/image/upload/v1770764468/hero-trj_sf9zpb.png"
                    alt="Projet MDA"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        zIndex: 1,
                    }}
                />

                {/* Dark Overlay for better text visibility */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, rgba(0, 18, 246, 0.4) 0%, rgba(0, 22, 59, 0.6) 100%)',
                        zIndex: 2,
                    }}
                />

                {/* CTA Button Overlay */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 3,
                        textAlign: 'center',
                        px: 2,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => navigate('/formulaire')}
                                sx={{
                                    mb: 3,
                                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                                    padding: { xs: '18px 50px', md: '25px 80px' },
                                    background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                                    boxShadow: '0 15px 50px rgba(255, 0, 0, 0.6)',
                                    animation: 'pulse 2s infinite',
                                    fontWeight: 900,
                                    letterSpacing: '0.1em',
                                }}
                            >
                                🔥 RÉSERVER MA PLACE 🔥
                            </Button>
                        </motion.div>

                        {/* Places Disponibles - Nouveau */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Box
                                className="glass"
                                sx={{
                                    padding: { xs: 2.5, md: 3 },
                                    maxWidth: '600px',
                                    margin: '0 auto 20px',
                                    backdropFilter: 'blur(200px)',
                                    border: '2px solid rgba(255, 228, 0, 0.3)',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                                    <AirlineSeatReclineExtra sx={{ fontSize: 30, color: '#ffe400', mr: 1 }} />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#ffe400',
                                            fontWeight: 700,
                                            fontSize: { xs: '1rem', md: '1.2rem' },
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                        }}
                                    >
                                        Places actuellement prises
                                    </Typography>
                                </Box>

                                <Box sx={{ position: 'relative', mb: 1.5 }}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={placesPercentage}
                                        sx={{
                                            height: 20,
                                            borderRadius: 10,
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            '& .MuiLinearProgress-bar': {
                                                borderRadius: 10,
                                                background: placesPercentage <= 49
                                                    ? 'linear-gradient(90deg, #00ff00 0%, #7fff00 100%)'
                                                    : placesPercentage <= 79
                                                        ? 'linear-gradient(90deg, #ffe400 0%, #ffb700 100%)'
                                                        : placesPercentage <= 89
                                                            ? 'linear-gradient(90deg, #ff9500 0%, #ff7700 100%)'
                                                            : 'linear-gradient(90deg, #ff0000 0%, #cc0000 100%)',
                                                transition: 'all 0.5s ease',
                                            },
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: '#000',
                                            fontWeight: 900,
                                            fontSize: '0.9rem',
                                            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                                        }}
                                    >
                                        {placesPercentage}%
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: getPlacesColor(),
                                        fontWeight: 600,
                                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                                        textAlign: 'center',
                                    }}
                                >
                                    {getPlacesMessage()}
                                </Typography>
                            </Box>
                        </motion.div>

                        {/* Subtitle under places */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >
                            <Box
                                className="glass"
                                sx={{
                                    padding: { xs: 3, md: 4 },
                                    maxWidth: '900px',
                                    margin: '0 auto',
                                    backdropFilter: 'blur(200px)',
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 500,
                                        lineHeight: 1.6,
                                        fontSize: { xs: '1rem', md: '1.3rem' },
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                                    }}
                                >
                                    Tu veux savoir comment atteindre les <span style={{ color: '#ffe400', fontWeight: 800 }}>
                    10 000 €
                  </span>{' '} en quelques semaines ? <br/> Réserve vite ta place pour découvrir les secrets du{' '}
                                    <span style={{ color: '#ffe400', fontWeight: 800 }}>
                    Projet MDA
                  </span>{' '}
                                    et générer tes premiers revenus en ligne ! Ne rate pas cette
                                    opportunité{' '}
                                    <span style={{ color: '#ffe400', fontWeight: 800 }}>
                    GRATUITE
                  </span>{' '}
                                    pour transformer ton business.
                                </Typography>
                            </Box>
                        </motion.div>
                    </motion.div>
                </Box>
            </Box>

            {/* Why Join Section - ENRICHI */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    background: 'linear-gradient(180deg, #00163b 0%, #0012f6 50%, #00163b 100%)',
                }}
            >
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{
                                mb: 3,
                                color: '#fff',
                                fontWeight: 900,
                                textShadow: '0 0 30px rgba(255, 228, 0, 0.3)',
                                fontSize: { xs: '2rem', md: '3rem' },
                            }}
                        >
                            Pourquoi Rejoindre{' '}
                            <span style={{ color: '#ffe400' }}>PROJET MDA</span> ?
                        </Typography>

                        <Typography
                            variant="h5"
                            align="center"
                            sx={{
                                mb: 8,
                                color: 'rgba(255,255,255,0.9)',
                                fontWeight: 400,
                                maxWidth: '900px',
                                margin: '0 auto 4rem',
                                lineHeight: 1.8,
                                px: 2,
                                fontSize: { xs: '1rem', md: '1.3rem' },
                            }}
                        >
                            Ce Masterclass de 4 jours n'est pas une formation ordinaire.
                            C'est une opportunité <span style={{ color: '#ffe400', fontWeight: 700 }}>UNIQUE</span> de
                            découvrir <span style={{ color: '#ff0000', fontWeight: 700 }}>En Live</span>  ce que les 1% qui réussissent vraiment en ligne font différemment.
                            Tu vas comprendre pourquoi certains explosent leurs revenus pendant que d'autres stagnent.
                            C'est ton moment de <span style={{ color: '#ffe400', fontWeight: 700 }}>CHANGER DE VIE</span>.
                        </Typography>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Grid container spacing={4}>
                            {benefits.map((benefit, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <motion.div variants={itemVariants}>
                                        <Card
                                            className="glass metallic-gradient"
                                            sx={{
                                                height: '100%',
                                                transition: 'all 0.4s ease',
                                                backdropFilter: 'blur(200px)',
                                                '&:hover': {
                                                    transform: 'translateY(-15px) scale(1.02)',
                                                    boxShadow: '0 25px 50px rgba(255, 228, 0, 0.4)',
                                                },
                                            }}
                                        >
                                            <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                                <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        mb: 2,
                                                        color: '#fff',
                                                        fontWeight: 700,
                                                        fontSize: '1.1rem',
                                                    }}
                                                >
                                                    {benefit.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: 'rgba(255,255,255,0.85)',
                                                        lineHeight: 1.7,
                                                        fontSize: '0.95rem',
                                                    }}
                                                >
                                                    {benefit.description}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    {/* Section supplémentaire de promesses */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Box
                            className="glass metallic-gradient"
                            sx={{
                                mt: 8,
                                p: { xs: 4, md: 6 },
                                textAlign: 'center',
                                backdropFilter: 'blur(200px)',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    mb: 4,
                                    color: '#ffe400',
                                    fontWeight: 900,
                                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                                }}
                            >
                                🎯 C'est Ta Chance de Tout Changer
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#fff',
                                    lineHeight: 1.9,
                                    maxWidth: '1000px',
                                    margin: '0 auto',
                                    fontWeight: 400,
                                    fontSize: { xs: '1rem', md: '1.2rem' },
                                }}
                            >
                                Imagine-toi dans 6 mois : <span style={{ color: '#ffe400', fontWeight: 700 }}>Libre</span> de
                                travailler d'où tu veux, quand tu veux. Avec des revenus qui tombent même pendant que tu dors.
                                Sans patron, sans horaires imposés, sans limite de revenus.
                                <br /><br />
                                Le <span style={{ color: '#ffe400', fontWeight: 700 }}>Projet MDA</span> te donne les clés
                                pour ouvrir ces portes que tu croyais fermées. Pour accéder à ce monde où l'argent
                                n'est plus un problème, mais un outil au service de ta liberté.
                                <br /><br />
                                <span style={{ color: '#ff0000', fontWeight: 700 }}>Attention</span> : Ce que tu vas
                                découvrir dans ce Masterclass va remettre en question tout ce qu'on t'a appris sur
                                l'argent et le succès. Es-tu prêt à sortir de ta zone de confort ?
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Countdown Section */}
            <Box
                sx={{
                    py: 10,
                    background: 'linear-gradient(180deg, #0012f6 0%, #00163b 100%)',
                }}
            >
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h3"
                            align="center"
                            sx={{
                                mb: 4,
                                color: '#fff',
                                fontWeight: 900,
                                fontSize: { xs: '1.5rem', md: '2.5rem' },
                            }}
                        >
                            ⏰ L'offre se termine dans :
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
                            <CountdownTimer />
                        </Box>

                        <Box sx={{ textAlign: 'center' }}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate('/formulaire')}
                                    sx={{
                                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                                        padding: { xs: '18px 50px', md: '20px 60px' },
                                        background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                                        boxShadow: '0 10px 40px rgba(255, 0, 0, 0.5)',
                                    }}
                                >
                                    S'INSCRIRE GRATUITEMENT
                                </Button>
                            </motion.div>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* About Section */}
            <Box
                sx={{
                    py: 10,
                    background: 'linear-gradient(180deg, #00163b 0%, #0012f6 100%)',
                }}
            >
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Grid container spacing={6} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box
                                    component="img"
                                    src="https://res.cloudinary.com/djillj6xt/image/upload/v1770764469/38-141125_xncida.png"
                                    alt="Tsy Resy Jocy"
                                    sx={{
                                        width: '100%',
                                        maxWidth: '400px',
                                        height: 'auto',
                                        borderRadius: '50%',
                                        border: '5px solid #ffe400',
                                        boxShadow: '0 20px 60px rgba(255, 228, 0, 0.4)',
                                        margin: '0 auto',
                                        display: 'block',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        mb: 3,
                                        color: '#ffe400',
                                        fontWeight: 900,
                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                    }}
                                >
                                    Qui suis-je ?
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#fff',
                                        lineHeight: 1.8,
                                        fontWeight: 400,
                                        fontSize: { xs: '1rem', md: '1.1rem' },
                                    }}
                                >
                                    Je m'appelle{' '}
                                    <span style={{ color: '#ffe400', fontWeight: 700 }}>
                    Tsy Resy Jocy
                  </span>
                                    , je suis un Expert en Marketing digital. J'aide les marques à
                                    se démarquer en ligne, j'accompagne des entreprises dans leur
                                    transformation digitale, et je partage des stratégies
                                    éprouvées qui ont généré des millions d'euros de revenus.
                                    <br />
                                    <br />
                                    Avec le{' '}
                                    <span style={{ color: '#ffe400', fontWeight: 700 }}>
                    Projet MDA
                  </span>
                                    , je te révèle les secrets qui m'ont permis d'aider mes
                                    clients à générer plus de 10 000€ par mois de manière
                                    récurrente.
                                </Typography>
                            </Grid>
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* Final CTA */}
            <Box
                sx={{
                    py: 8,
                    background: 'linear-gradient(135deg, #ff0000 0%, #0012f6 100%)',
                    textAlign: 'center',
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 3,
                            color: '#fff',
                            fontWeight: 900,
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            fontSize: { xs: '1.8rem', md: '2.5rem' },
                        }}
                    >
                        Prêt à transformer ta vie ?
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 4,
                            color: '#ffe400',
                            fontWeight: 500,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                        }}
                    >
                        Rejoins-nous GRATUITEMENT maintenant !
                    </Typography>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => navigate('/formulaire')}
                            sx={{
                                fontSize: { xs: '1.1rem', md: '1.3rem' },
                                padding: { xs: '18px 50px', md: '20px 60px' },
                                background: '#ffe400',
                                color: '#000',
                                fontWeight: 900,
                                '&:hover': {
                                    background: '#fff',
                                },
                            }}
                        >
                            JE RÉSERVE MA PLACE
                        </Button>
                    </motion.div>
                </Container>
            </Box>
        </Box>
    );
};

export default LandingPage;