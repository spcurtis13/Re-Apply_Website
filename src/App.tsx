//import React from 'react';
import { NavBar, HomePage } from './components/index';
import './App.css';

function App() {
  return (
    <>
      <div className='mainScreen'>
        <div className='NavigationBar'>
          <NavBar />
        </div>  
        <div className='LandingPage'>
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;