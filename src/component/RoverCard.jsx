import React, { useState } from "react";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Collapse, Grid, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import dayjs from 'dayjs';
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function RoverCard(props) {
  const cameraList = [];
  props.data.cameras.forEach((camera) => cameraList.push(camera.name));
  const cameraString = cameraList.join(", ");

  const [open, setOpen] = useState(false);

  const handleCameraListClick = () => setOpen(!open);

  return (
    <Grid item key={props.data.id} xs={12} sm={6}>
      <Card sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Rover
          </Typography>
          <Typography sx={{ mb: 1.5 }} variant="h4" component="div">
            {props.data.name}
          </Typography>
          <Box sx={{ width: '100%', mb: 1 }}>
            <table border={0} aria-label="rover info">
              <tbody>
                <tr>
                  <td><Typography sx={{ pr: 1 }}>Launched on:</Typography></td>
                  <td><Typography>{dayjs(props.data.launch_date).format('LL')}</Typography></td>
                </tr>
                <tr>
                  <td><Typography sx={{ pr: 1 }}>Landed on:</Typography></td>
                  <td><Typography>{dayjs(props.data.landing_date).format('LL')}</Typography></td>
                </tr>
                <tr>
                  <td><Typography sx={{ pr: 1 }}>Total photos:</Typography></td>
                  <td><Typography>{props.data.total_photos.toLocaleString()}</Typography></td>
                </tr>
              </tbody>
            </table>
          </Box>
          <List sx={{ width: '100%' }} component="box">
            <ListItemButton sx={{ padding: 0 }} onClick={handleCameraListClick}>
              <ListItemText primary="Available cameras" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText sx={{ pl: 2 }} primary={cameraString} />
              </List>
            </Collapse>
          </List>
        </CardContent>
        <CardActions sx={{ flexDirection: "row-reverse", padding: 2, pt: 0 }}>
          <Button size="large" component={Link} to={`photos/${props.data.name.toLowerCase()}`}>
            See Photos
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RoverCard;