//importing react from react and icons from assest 
import React from 'react';
import { Stack, Typography } from '@mui/material';
 
import Icon from '../assets/icons/gym.png';
//Adding a body part and alining 
const BodyPart = ({ item, setBodyPart, bodyPart}) => {
  return (
   <Stack
   type="button"
   alignItems="center"
   justifyContent="center"
   className="bodyPart-card"
   sx={{
   borderTop: bodyPart === item ?  '4px solid #ff2625' : '',
    backgroundColor: '#fff',
    borderRadius: '20px',
    width: '270px',
    height: '280px',
    cursor: 'pointer', 
    gap: '47px'
   }}
   onClick={() => {
    setBodyPart(item);
    window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
   }}
   >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: 
    '40px'}}/>
    <Typography fontSize="24px" fontWeight="bold" color='#3A1212'
    textTransform="capitalize">{item}</Typography>
   </Stack>
  )
}

export default BodyPart