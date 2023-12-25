const fs = require('fs');
const path = require('path');

// Path to the JSON file
const jobFilePath = path.join(__dirname, '..', 'data', 'jobs.json');

// Helper function to read the JSON file
const readJobsFile = async () => {
    return JSON.parse(fs.readFileSync(jobFilePath));
};

exports.getAllJobs = async () => {
    return readJobsFile();
};

exports.addJob = (jobData) => {
    const jobs = readJobsFile();
    // Create a new job with a unique identifier, etc.
    const newJob = { id: Date.now(), ...jobData };
    jobs.push(newJob);
    fs.writeFileSync(jobFilePath, JSON.stringify(jobs));
    return newJob;
};

// More functions for updating, deleting, etc.
