import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from '../component/Header';
import RoverGrid from '../component/RoverGrid';

function Home() {
	return (
		<CssBaseline>
			<main>
				<Header title="Mars Rovers" subtitle="Over the years, NASA has sent multiple robotic vehicles, called rovers, to Mars. Each rover has its own set of photos stored in the database. Explore the Mars rovers and the photos taken by them." />
				<RoverGrid />
			</main>
		</CssBaseline>
	);
}

export default Home;