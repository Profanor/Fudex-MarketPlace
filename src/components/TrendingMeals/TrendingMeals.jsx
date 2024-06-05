import React, { useState } from 'react';
import { Container, Box, Typography, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './TrendingMeals.css';

const trendingMealsData = [
  { name: 'Egusi and Pounded yam', image: '/images/egusi.jpeg' },
  { name: 'Spaghetti Bolognese', image: '/images/spag.webp' },
  { name: 'Yam and Egg sauce', image: '/images/yam.jpeg' },
  { name: 'Yam porridge', image: '/images/porridge.jpeg' },
  { name: 'Chicken and Chips', image: '/images/chips.jpeg' },
  { name: 'Jollof rice and Chicken', image: '/images/Jollof-rice.jpeg' },
  { name: 'Vegetable soup and Fufu', image: '/images/vegetablesoup.jpeg' },
  { name: 'Catfish Peppersoup', image: '/images/catfish.jpeg' },
];

const TrendingMeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(trendingMealsData.length / 4) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(trendingMealsData.length / 4) - 1 ? 0 : prevIndex + 1));
  };

  const displayedMeals = trendingMealsData.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <Container maxWidth="lg" sx={{ marginTop: '12rem', marginBottom: '4rem', textAlign: 'center', minHeight: '30rem' }}>
      <Typography variant="h6" sx={{ color: '#F6613F', marginBottom: '1rem', fontWeight: 'bold' }}>
        See our popular meals
      </Typography>
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} 
        alignItems="center" 
        justifyContent="center" 
        sx={{ marginBottom: '1.5rem', textAlign: { xs: 'center', md: 'left' } }}
        >
            <Typography 
            variant="h4" 
            sx={{ 
                color: '#333333', 
                fontSize: {
                    xs: '1.5rem',
                    sm: '2rem',
                },
                fontWeight: 'bold', 
                marginLeft: '1rem' 
                }}
            >
          Trending Meals
        </Typography>
        <Box display="flex" alignItems="center" gap={1} sx={{ marginLeft: '1rem', marginTop: { xs:'1rem', sm: '0' }} }>
          <IconButton onClick={handlePrevious} className="trending-meals-arrow">
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton onClick={handleNext} className="trending-meals-arrow">
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {displayedMeals.map((meal, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ marginTop: '3rem' }}>
            <Box className="meal-card" sx={{ position: 'relative' }}>
              <Box
                className="meal-image"
                sx={{
                  backgroundImage: `url(${meal.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '200px',
                  borderRadius: '10px',
                }}
              >
                <Box className="meal-overlay" sx={{ position: 'absolute', bottom: 0, width: '100%', padding: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', borderRadius: '0 0 10px 10px' }}>
                  <Typography variant="body1">{meal.name}</Typography>
                  <Typography variant="body2" sx={{ color: '#F6613F', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    Add to cart
                    <ArrowForwardIosIcon sx={{ fontSize: 'small', marginLeft: '0.5rem' }} />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" sx={{ marginTop: '4rem' }}>
        {[...Array(Math.ceil(trendingMealsData.length / 4))].map((_, index) => (
          <Box
            key={index}
            className={`trending-meals-circle ${currentIndex === index ? 'active' : ''}`}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: '2px solid #F6613F',
              margin: '0 5px',
              cursor: 'pointer',
              backgroundColor: currentIndex === index ? '#F6613F' : 'transparent',
            }}
          />
        ))}
      </Box>
    </Container>
  );
};

export default TrendingMeals;