import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from '../component/Header';
import { useParams } from 'react-router-dom';
import RoverImageList from '../component/RoveImageList';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import RoverAppBar from '../component/RoverAppBar';

function capitalizeFirstLetter(string) {
  return !string ? "" : string.charAt(0).toUpperCase() + string.slice(1);
}

function RoverDetail() {
  const { name } = useParams();
  const [ date, setDate ] = useState(dayjs());
  const capitalizedName = capitalizeFirstLetter(name);

  // TODO: Add min and max for the datepicker.
  return (
    <CssBaseline>
      <RoverAppBar />
      <main>
        <Header hasBackButton title={`${capitalizedName}`} subtitle={`Photos taken by the ${capitalizedName} rover. Use the date picker to choose a date to see photos taken on that day.`} />
        <Container sx={{ pb: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }} maxWidth="sm">
          <DatePicker defaultValue={date} value={date} maxDate={dayjs()} onChange={(newValue) => setDate(newValue)} />
        </Container>
        <Container sx={{ display: 'flex', justifyContent: 'center' }} maxWidth="md">
          <RoverImageList name={name} date={date} />
        </Container>
      </main>
    </CssBaseline>
  );
}

export default RoverDetail;