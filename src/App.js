import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/Home';
import RoverDetail from './pages/RoverDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rover-detail" element={<RoverDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
