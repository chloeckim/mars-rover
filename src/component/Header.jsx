import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 6
      }}
    >
      <Container maxWidth="md">
        {props.hasBackButton && <Button variant='text' startIcon={<ArrowBack />} component={Link} to={'/'}>Back</Button>}
      </Container>
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