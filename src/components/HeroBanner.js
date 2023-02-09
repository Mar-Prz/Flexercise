import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg'
//hero banner code
const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '65px'},
      ml: { sm: '50px'}
    }} position="relative" p='20px'>
      <Typography color="#FF2625"
      fontWeight="600" fontsize="26px">
        FLEXERCISE
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px'}
      }}
      mb="23px" mt="30px"
      >
        Workout, Build Muscle <br /> and Get Results
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Have a look at the best exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises"
      sx={{ backgroundColor: '#98FB98',
      padding: '10px'}}
      >Discover Exercises</Button>
      <Typography
        fontWeight={600}
        color="Black"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none'}
        }}
        fontSize='200px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner"
      className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner