const MyJob = require('../models/myJob')

const createJob = async (req, res, next) => {
    try {
        const { company, position, location, startDate, endDate, responsibilities} = req.body;

        if (!company || !position || !location || !startDate || !endDate || !responsibilities)
            return res.status(400).json({ msg: "Missing required fields" });

        const jobExist = await MyJob.findOne({ company, position, location, startDate, endDate });
        if (jobExist)
            return res.status(400).json({ msg: "Job already exists" });

        const jobData = await MyJob.create({ company, position, location, startDate, endDate, responsibilities});
        res.status(201).json({ job: jobData });

    } catch (error) {
        next(error);
    }
}

const getJobs = async (req, res, next) => {
    try {
        const jobs = await MyJob.find({});

        if (jobs.length <= 0 ) 
            return res.status(404).json({ msg: "No work experience found" });
        
        res.status(200).json({ jobs });
    } catch (error) {
        next(error);
    }
}

const getJob = async (req, res, next) => {
    try {
        const { id } = req.params;
        const job = await MyJob.findById(id);

        if (!job)
            return res.status(404).json({ msg: "Job not found" });

        res.status(200).json({ job });
    } catch (error) {
        next(error);
    }
}

const updateJob = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!data || Object.keys(data).length === 0)
            return res.status(400).json({ msg: "No data provided" });

        if (
            (data.company !== undefined && data.company.length === 0) || 
            (data.position !== undefined && data.position.length === 0) || 
            (data.location !== undefined && data.location.length === 0) || 
            (data.startDate !== undefined && data.startDate.length === 0) || 
            (data.endDate !== undefined && data.endDate.length === 0) || 
            (data.responsibilities !== undefined && data.responsibilities.length === 0)
        )
            return res.status(400).json({ msg: "Missing required fields" });

        const updatedJob = await MyJob.findByIdAndUpdate(id, data, { new: true });

        if (!updatedJob)
            return res.status(404).json({ msg: "Job not found" });

        res.status(200).json({ job: updatedJob });

    } catch (error) {
        next(error);
    }
}

const deleteJob = async (req, res, next) => {
    try {
        const { id } = req.params;

        const job = await MyJob.findByIdAndDelete({_id: id});

        if (!job)
            return res.status(404).json({ msg: "Job not found" });

        res.status(200).json({ job });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getJobs,
    getJob,
    updateJob,
    deleteJob,
    createJob,
}