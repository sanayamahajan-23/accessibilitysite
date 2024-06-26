import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Adjusted import for Routes
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard/Dashboard';
import RealTimeScanner from './components/RealTimeScanner/RealTimeScanner';
import Sandbox from './components/sandbox';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/real-time-scan" element={<RealTimeScanner />} />
        <Route path="/sandbox" element={<Sandbox />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
