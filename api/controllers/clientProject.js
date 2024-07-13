const ClientProject = require('../models/clientProject')

const createClientProject = async (req, res, next) => {
    try {
        const { name, email, phone, projectTitle, projectDetails } = req.body

        if (!name || !email || !phone || !projectTitle || !projectDetails)
            return res.status(404).json({ msg: "Missing required fields" });

        const clientProjectExist = await ClientProject.findOne({ name, email, phone, projectTitle, projectDetails });
        if (clientProjectExist)
            return res.status(400).json({ msg: "Client project already exists" });

        const clientProject = await ClientProject.create({ name, email, phone, projectTitle, projectDetails });
        res.status(201).json({ clientProject });

    } catch (error) {
        next(error);
    }
}

const getAllClientProjects = async (req, res, next) => {
    try {
        const clientProjects = await ClientProject.find({});

        if (clientProjects.length <= 0) 
            return res.status(404).json({ msg: "No client projects found" });
        
        res.status(200).json({ clientProjects });
    } catch (error) {
        next(error);
    }
}

const getClientProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const clientProject = await ClientProject.findById({_id: id});

        if (!clientProject)
            return res.status(404).json({ msg: "Client project not found" });

        res.status(200).json({ clientProject });
    } catch (error) {
        next(error);
    }
}

const updateClientProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!data || Object.keys(data).length === 0)
            return res.status(400).json({ msg: "No data provided" });

        if (
            (data.name !== undefined && data.name.length === 0) || 
            (data.email !== undefined && data.email.length === 0) || 
            (data.phone !== undefined && data.phone.length === 0) || 
            (data.projectTitle !== undefined && data.projectTitle.length === 0) || 
            (data.projectDetails !== undefined && data.projectDetails.length === 0)
        )
            return res.status(400).json({ msg: "Missing required fields" });

        const clientProjectExist = await ClientProject.findByIdAndUpdate({_id: id}, data, { new: true });

        if (!clientProjectExist)
            return res.status(404).json({ msg: "Client project not found" });

        res.status(200).json({ clientProject: clientProjectExist });

    } catch (error) {
        next(error);
    }
}

const deleteClientProject = async (req, res, next) => {
    try {
        const { id } = req.params;

        const clientProjectExist = await ClientProject.findByIdAndDelete({_id: id});

        if (!clientProjectExist)
            return res.status(404).json({ msg: "Client project not found" });

        res.status(200).json({ clientProject: clientProjectExist });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createClientProject,
    getAllClientProjects,
    getClientProject,
    updateClientProject,
    deleteClientProject,
}