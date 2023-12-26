import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, HomePage, Employers } from './components/index';
import JobsPage from './pages/JobsPage';
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
            <Route path="/jobs" element={<JobsPage />} />
          </Routes>
          </div>  
      </div>
    </Router>
  );
}

export default App;
