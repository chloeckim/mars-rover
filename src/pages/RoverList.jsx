import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from '../component/Header';

const theme = createTheme();

function RoverList() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<main>
					<Header title="Mars Rovers" subtitle="Select a rover to view photos"/>
					{/* Add rover cards here */}
				</main>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default RoverList;