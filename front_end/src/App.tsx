import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, HomePage, Employers } from './components/index';
import './App.css';

function App() {
  return (
    <Router>
      <div className='mainScreen'>
        <div className='NavigationBar'>
          <NavBar />
        </div>
          <div className='LandingPage'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/employers" element={<Employers />} />
          </Routes>
          </div>  
      </div>
    </Router>
  );
}

export default App;
