import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Header(props) {
	return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {props.subtitle}
        </Typography>
      </Container>
    </Box>
	);
}

export default Header;