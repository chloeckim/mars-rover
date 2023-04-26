import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Header(props) {
  // TODO: Add app bar.
  // TODO: Adjust the typography. Looks aweward in mobile right now.
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          {props.subtitle}
        </Typography>
      </Container>
    </Box>
	);
}

export default Header;