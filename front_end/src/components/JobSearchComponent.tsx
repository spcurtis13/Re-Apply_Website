// Static jobs data (replace this with API call if needed)
const staticJobs = [
    { id: 1, title: 'Software Engineer', location: 'New York' },
    { id: 2, title: 'Web Developer', location: 'San Francisco' },
    // ... more jobs ...
];

import React, { useState, useEffect } from 'react';

function JobSearchComponent() {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        setJobs(staticJobs); // Replace with API call
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
