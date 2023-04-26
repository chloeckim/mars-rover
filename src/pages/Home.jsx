import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from '../component/Header';
import RoverGrid from '../component/RoverGrid';
import { QueryClient, QueryClientProvider } from 'react-query';

// TODO: Figure out what this does and maybe send it up to App.js
const theme = createTheme();

const queryClient = new QueryClient();

function Home() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<main>
					<Header title="Mars Rovers" subtitle="Select a rover to view photos"/>
					<QueryClientProvider client={queryClient}>
						<RoverGrid/>
					</QueryClientProvider>
				</main>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default Home;