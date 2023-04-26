import { Alert, Box, CircularProgress, Container, Grid } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import RoverCard from './RoverCard';

function RoverGrid() {
  const api_key = 'DEMO_KEY';
	const { isLoading, isError, data, error } = useQuery('rovers', () =>
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=${api_key}`).then(res =>
      res.json()
    )
  );

  if (isLoading) {
    return (
      <Box sx={{ px: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ px: 8 }}>
        <Alert severity='error'>Error loading data. Error: {error.message}</Alert>
      </Box>
    );
  }

  if (data.hasOwnProperty('error')) {
    return (
      <Box sx={{ px: 8 }}>
        <Alert severity='error'>{data.error.code} - {data.error.message}</Alert>
      </Box>
    );
  }

	return (
    <Container sx={{ pb: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {data.rovers.map((rover) => (<RoverCard data={rover}/>))}
      </Grid>
    </Container>
	);
}

export default RoverGrid;