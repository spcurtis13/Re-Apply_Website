// JobsPage.tsx
import React from 'react';
import JobSearchComponent from '../components/JobSearchComponent';
import JobList from '../components/JobList';

function JobsPage() {
    // ... jobs page specific states and logic ...

    return (
        <div>
            <JobSearchComponent />
            <JobList />
        </div>
    );
}

export default JobsPage;
