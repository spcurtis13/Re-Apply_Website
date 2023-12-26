/*const staticJobs = [
    { id: 1, title: 'Software Engineer', location: 'New York' },
    { id: 2, title: 'Web Developer', location: 'San Francisco' },
    // ... more jobs ...
];*/

import React, { useState, useEffect } from 'react';

function JobSearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/jobs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setJobs(data); // Assuming the API returns an array of jobs
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
    }

    function filteredJobs() {
        return jobs.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <ul>
                {filteredJobs().map(job => (
                    <li key={job.id}>{job.title} - {job.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default JobSearchComponent;

