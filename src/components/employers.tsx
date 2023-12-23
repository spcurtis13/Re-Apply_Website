import React, { useState, useEffect } from 'react';
import './employers.css';
import employerData from './employers.json';

const Employers = () => {
  const [filteredEmployers, setFilteredEmployers] = useState(employerData);
  const [filter, setFilter] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let sortedEmployers = [...employerData];

    switch (filter) {
      case 'asc':
        sortedEmployers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'desc':
        sortedEmployers.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'size':
        sortedEmployers.sort((a, b) => a.estimatedEmployees - b.estimatedEmployees);
        break;
      case 'type':
        sortedEmployers.sort((a, b) => a.type.localeCompare(b.type));
        break;
      default:
        break;
    }
    setFilteredEmployers(sortedEmployers);
  }, [filter]);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="FullPage">
      <h1 className="title">Current Employers</h1>
      <div className='parentFilter'>
      <div className='filters'>
      <div className="hamburgerIcon" onClick={toggleMenu}>
        ☰
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <button onClick={() => setFilter('asc')}>Alphabetical (A-Z)</button>
          <button onClick={() => setFilter('desc')}>Alphabetical (Z-A)</button>
          <button onClick={() => setFilter('size')}>Employee Size</button>
          <button onClick={() => setFilter('type')}>Type</button>
        </div>
      )}
      </div>


      </div>
      <div className="body">
        <div className="EmployersList">
          {filteredEmployers.map((employer, index) => (
            <div key={index} className="EmployerItem">
              <h2>{employer.name}</h2>
              <p>{employer.description}</p>
              <p>Location: {employer.location}</p>
              <p>Estimated Employees: {employer.estimatedEmployees}</p>
              <p>Type: {employer.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Employers;
