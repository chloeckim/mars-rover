import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from '../component/Header';

const theme = createTheme();

function RoverDetail() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <main>
          <Header title="Some Rover Name" subtitle="Photos taken on some date." />
          {/* Add rover cards here */}
        </main>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default RoverDetail;