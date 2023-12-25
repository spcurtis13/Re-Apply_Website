const jobService = require('../services/jobService.js');

exports.getAllJobs = async (req, res) => {
    console.log("top of try");
    try {
        const jobs = await jobService.getAllJobs();
        console.log("within try");
        res.json(jobs);
    } catch (error) {
        res.status(500).send('Error fetching jobs');
        console.log(error);
    }
};

exports.addJob = async (req, res) => {
    try {
        const newJob = await jobService.addJob(req.body);
        res.status(201).json(newJob);
    } catch (error) {
        res.status(400).send('Error adding job');
    }
};

// More functions for updating, deleting, etc.

