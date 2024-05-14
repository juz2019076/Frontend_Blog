import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/DashboardPage';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
