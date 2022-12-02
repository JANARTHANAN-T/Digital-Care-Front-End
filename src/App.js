import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Contact from './component/Contact/Contact'
import Navbar from './component/Navbar/Navbar'
import AllRoutes from './AllRoutes'


function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <AllRoutes />
          <Contact />
        </Router>
    </div>
  );
}

export default App;
