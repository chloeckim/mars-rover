import { Alert, Box, CircularProgress, Container, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react"; 
import { useQuery } from "react-query";

function RoverImageList(props) {
  const api_key = 'DEMO_KEY';
  const dateString = props.date.format('YYYY-MM-DD');

  // TODO: Add pagination.
  const { isLoading, isError, data, error } = useQuery(`photos/${props.name}/${dateString}`, () =>
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${props.name}/photos?earth_date=${dateString}&api_key=${api_key}`).then(res =>
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

  if (data.photos === undefined || data.photos.length == 0) {
    return (
      <Box sx={{ px: 8 }}>
        <Alert severity='info'>No photos to show. Try choosing a different rover and/or a different date.</Alert>
      </Box>
    )
  }

  return (
    <Container sx={{ pb: 8 }} maxWidth="md">
      <ImageList cols={3}>
        {data.photos.map((photo) => (
          <ImageListItem key={photo.id}>
            <img
              src={photo.img_src}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default RoverImageList;