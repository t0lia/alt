import React from 'react';
import { Button, Typography, Box, useMediaQuery } from '@mui/material';
import useStore from './store';

const Result: React.FC = () => {
  const { score, exercises, reset, exitToMain } = useStore();
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
      className={isSmallScreen ? "result-container" : ""}
    >
      <Typography variant={isSmallScreen ? 'h5' : 'h4'} gutterBottom>
        Result
      </Typography>
      <Typography variant={isSmallScreen ? 'body1' : 'h6'}>
        You scored {score} out of {exercises.length}
      </Typography>
      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button variant="contained" color="primary" onClick={reset}>
          Try Again
        </Button>
        <Button variant="contained" color="secondary" onClick={exitToMain}>
          Exit
        </Button>
      </Box>
    </Box>
  );
};

export default Result;
