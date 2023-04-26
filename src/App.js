import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import RoverDetail from './pages/RoverDetail';
import { ThemeProvider, createTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './App.css';

const queryClient = new QueryClient();
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="photos/:name" element={<RoverDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
