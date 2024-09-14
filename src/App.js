// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar'; // Import Sidebar component
import Home from './Home'; // Import Home component
import Customer from './Customer'; // Import About component

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar /> {/* Render Sidebar */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/customer" element={<Customer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
