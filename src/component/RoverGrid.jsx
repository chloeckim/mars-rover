import { Container, Grid } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import RoverCard from './RoverCard';

function RoverGrid() {
	const { isLoading, isError, data, error } = useQuery('repoData', () =>
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=DEMO_KEY').then(res =>
      res.json()
    )
  );

  // TODO: add loading bar
  if (isLoading) {
    return <span>Loading...</span>
  }

  // TODO: Implement error page
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  console.log(data);

	return (
    <Container sx={{ py: 4 }} maxWidth="md">
      <Grid container spacing={4}>
        {data.rovers.map((rover) => (<RoverCard data={rover}/>))}
      </Grid>
    </Container>
	);
}

export default RoverGrid;