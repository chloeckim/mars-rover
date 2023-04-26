import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

function RoverAppBar() {
  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="/" sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.2rem', color: 'inherit', textDecoration: 'none' }}>
            MARS ROVERS
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default RoverAppBar;