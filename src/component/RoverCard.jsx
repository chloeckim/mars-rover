import React from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// TODO: Make the facts list table so it is columnized.
// TODO: Add available cameras list.
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
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            total photos: {props.data.total_photos.toLocaleString()}
          </Typography>
          {/* <List
            sx={{ width: '100%', maxHeight: 200 }}
            dense
            subheader={<ListSubheader>available cameras</ListSubheader>}
          >
            {props.data.cameras.map((camera) => (
              <ListItem>
                <ListItemText primary={camera.full_name} />
              </ListItem>
            ))}
          </List> */}

        </CardContent>
        <CardActions>
          <Button component={Link} to={`photos/${props.data.name.toLowerCase()}`}>
            See Photos
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RoverCard;