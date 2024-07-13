const ExperienceSummary = require('../models/experienceSummary')

const createExperienceSummary = async (req, res, next) => {
    try {
        const experienceSummaries = await ExperienceSummary.find({});
        if (experienceSummaries.length > 0)
            return res.status(400).json({ msg: "Experience summary already exists" });

        const { duration, clients, projects } = req.body
        if (!duration ||!clients ||!projects)
            return res.status(400).json({ msg: "Missing required fields" });
        
        if (!Number.isInteger(duration) || !Number.isInteger(clients) || !Number.isInteger(projects))
            return res.status(400).json({ msg: "Invalid input fields" });

        const experienceSummary = await ExperienceSummary.create({ duration, clients, projects });
        res.status(201).json({ experienceSummary });
    } catch (error) {
        next(error);
    }
}

const updateExperienceSummary = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        
        if ( (data.duration && !Number.isInteger(data.duration)) || (data.clients && !Number.isInteger(data.clients)) || (data.projects && !Number.isInteger(data.projects)))
            return res.status(400).json({ msg: "Invalid input fields" });

        const experienceSummary = await ExperienceSummary.findByIdAndUpdate({_id: id}, data, { new: true });
        if (!experienceSummary)
            return res.status(404).json({ msg: "Experience summary not found" });

        res.status(200).json({ experienceSummary });
    } catch (error) {
        next(error);
    }
}

const deleteExperienceSummary = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const experienceSummary = await ExperienceSummary.findByIdAndDelete({_id: id});

        if (!experienceSummary)
            return res.status(404).json({ msg: "Experience summary not found" });

        res.status(200).json({ experienceSummary });
    } catch (error) {
        next(error);
    }
}

const getAllExperienceSummaries = async (req, res, next) => {
    try {
        const experienceSummaries = await ExperienceSummary.find({});

        if (experienceSummaries.length > 0) {
            return res.status(200).json({ experienceSummary: experienceSummaries[0] });
        } else {
            return res.status(404).json({ msg: "No experience summaries found" });
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createExperienceSummary,
    updateExperienceSummary,
    deleteExperienceSummary,
    getAllExperienceSummaries,
}