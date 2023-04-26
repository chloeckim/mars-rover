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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Alert severity='error'>Error loading data. Error: {error.message}</Alert>
    );
  }

  if (data.hasOwnProperty('error')) {
    return (
      <Alert severity='error'>{data.error.code} - {data.error.message}</Alert>
    );
  }

  return (
    <Container sx={{ pb: 8 }}>
      <Grid container spacing={4}>
        {data.rovers.map((rover) => (<RoverCard data={rover} />))}
      </Grid>
    </Container>
  );
}

export default RoverGrid;