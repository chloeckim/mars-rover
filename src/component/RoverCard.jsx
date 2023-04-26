import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

function RoverCard(props) {
  return (
    <Grid item key={props.data.id} xs={12} sm={6}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Rover
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
            {props.data.name}
          </Typography>
          <Typography color="text.secondary">
            launch date: {props.data.launch_date}
          </Typography>
          <Typography color="text.secondary">
            landing date: {props.data.landing_date}
          </Typography>
          <Typography color="text.secondary">
            total photos: {props.data.total_photos.toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default RoverCard;