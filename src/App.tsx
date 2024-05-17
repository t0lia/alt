import React from 'react';
import './App.css';
import InitialPage from './InitialPage';
import Exercise from './Exercise';
import Result from './Result';
import useStore from './store';
import { AppBar, Toolbar, Typography, Container, Paper, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const App: React.FC = () => {
  const { currentExercise, showResult, exercises, showInitialPage } = useStore();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Language Tutor App
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" className={isSmallScreen ? "exercise-container" : ""}>
          <Box my={4}>
            <Paper elevation={3}>
              <Box p={4} textAlign="center">
                {showInitialPage ? (
                  <InitialPage />
                ) : showResult ? (
                  <Result />
                ) : (
                  <Exercise exercise={exercises[currentExercise]} />
                )}
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
