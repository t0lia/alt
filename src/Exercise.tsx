import React from 'react';
import { Button, Typography, Box, useMediaQuery } from '@mui/material';
import useStore from './store';

interface ExerciseProps {
  exercise: {
    sentence: string;
    options: string[];
    correctAnswer: string;
  };
}

const Exercise: React.FC<ExerciseProps> = ({ exercise }) => {
  const { incrementScore, nextExercise } = useStore();
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  const handleAnswer = (option: string) => {
    if (option === exercise.correctAnswer) {
      incrementScore();
    }
    nextExercise();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={isSmallScreen ? "flex-end" : "center"}
      alignItems="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant={isSmallScreen ? 'h6' : 'h5'} gutterBottom>
        {exercise.sentence}
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={isSmallScreen ? 4 : 0}>
        {exercise.options.map((option, index) => (
          <Button
            key={index}
            variant="contained"
            color="primary"
            onClick={() => handleAnswer(option)}
            size={isSmallScreen ? 'small' : 'medium'}
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Exercise;
