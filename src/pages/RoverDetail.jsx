import React, { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import Header from '../component/Header';
import { useParams } from 'react-router-dom';
import RoverImageList from '../component/RoveImageList';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

function capitalizeFirstLetter(string) {
  return !string ? "" : string.charAt(0).toUpperCase() + string.slice(1);
}

function RoverDetail() {
  const { name } = useParams();
  const [ date, setDate ] = useState(dayjs());
  const capitalizedName = capitalizeFirstLetter(name);

  return (
    <CssBaseline>
      <main>
        <Header title={`Rover: ${capitalizedName}`} subtitle={`Photos taken by ${capitalizedName} rover. Use the date picker to choose a different date.`} />
        <Container sx={{ pb: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }} maxWidth="sm">
          <DatePicker defaultValue={date} value={date} onChange={(newValue) => setDate(newValue)} />
        </Container>
        <RoverImageList name={name} date={date} />
      </main>
    </CssBaseline>
  );
}

export default RoverDetail;