const MyProject = require('../models/myProject')

const createProject = async (req, res, next) => {
    try {
        const { title, type, url, status, summary } = req.body;

        if (!title || !type || !url || !status || !summary)
            return res.status(400).json({ msg: "Missing required fields" });

        const projectExist = await MyProject.findOne({ url, title });
        if (projectExist)
            return res.status(400).json({ msg: "Project already exists" });

        const project = await MyProject.create({ title, type, url, status, summary });
        res.status(201).json({ project });

    } catch (error) {
        next(error);
    }
}

const updateProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!data || Object.keys(data).length === 0)
            return res.status(400).json({ msg: "No data provided" });

        if (
            (data.title!== undefined && data.title.length === 0) || 
            (data.type!== undefined && data.type.length === 0) || 
            (data.url!== undefined && data.url.length === 0) || 
            (data.status!== undefined && data.status.length === 0) || 
            (data.summary!== undefined && data.summary.length === 0)
        )
            return res.status(400).json({ msg: "Missing required fields" });

        const projectExist = await MyProject.findByIdAndUpdate({_id: id}, data, { new: true });

        if (!projectExist)
            return res.status(404).json({ msg: "Project not found" });

        res.status(200).json({ project: projectExist });

    } catch (error) {
        next(error);
    }
}

const deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params;

        const projectExist = await MyProject.findByIdAndDelete({_id: id});

        if (!projectExist)
            return res.status(404).json({ msg: "Project not found" });

        res.status(200).json({ project: projectExist });

    } catch (error) {
        next(error);
    }
}

const getAllProjects = async (req, res, next) => {
    try {
        const projects = await MyProject.find({});

        if (projects.length <= 0) 
            res.status(404).json({ msg: "No projects found" });
        
        res.status(200).json({ projects });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createProject,
    updateProject,
    deleteProject,
    getAllProjects,
}