import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FirewatchDetails from './components/services/FirewatchDetails';
import BusinessSecurityDetails from './components/services/BusinessSecurityDetails';
import MobilePatrolDetails from './components/services/MobilePatrolDetails';
import NeighborhoodSecurityDetails from './components/services/NeighborhoodSecurityDetails';
import EventSecurityDetails from './components/services/EventSecurityDetails';
import AdditionalServicesDetails from './components/services/AdditionalServicesDetails';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services/firewatch" element={<FirewatchDetails />} />
        <Route path="/services/business" element={<BusinessSecurityDetails />} />
        <Route path="/services/mobile-patrol" element={<MobilePatrolDetails />} />
        <Route path="/services/neighborhood" element={<NeighborhoodSecurityDetails />} />
        <Route path="/services/event" element={<EventSecurityDetails />} />
        <Route path="/services/additional" element={<AdditionalServicesDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
