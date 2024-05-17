import React from 'react';
import { Button, Box, Typography, useMediaQuery } from '@mui/material';
import logo from './logo.svg';
import useStore from './store';

const InitialPage: React.FC = () => {
  const startExercise = useStore((state) => state.startExercise);
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      padding={isSmallScreen ? 2 : 4}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Typography variant={isSmallScreen ? 'h5' : 'h4'} gutterBottom>
        Welcome to the Language Tutor App
      </Typography>
      <Button variant="contained" color="primary" onClick={startExercise}>
        Start
      </Button>
    </Box>
  );
};

export default InitialPage;
