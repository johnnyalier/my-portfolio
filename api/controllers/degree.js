const DegreeSchema = require('../models/degree')

const createDegree = async (req, res, next) => {
    try {
        const { degree, institution, location, graduationYear, summary } = req.body;

        if (!degree || !institution || !graduationYear || !summary || !location)
            return res.status(400).json({ msg: "Missing required fields" });

        const degreeExist = await DegreeSchema.findOne({ degree, institution });
        if (degreeExist)
            return res.status(400).json({ msg: "Degree already exists" });

        const degreeData = await DegreeSchema.create({ degree, institution, location, graduationYear, summary });
        res.status(201).json({ degreeData });

    } catch (error) {
        next(error);
    }
}

const updateDegree = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!data || Object.keys(data).length === 0)
            return res.status(400).json({ msg: "No data provided" });

        const degreeData = await DegreeSchema.findByIdAndUpdate({_id: id}, data, { new: true });
        if (!degreeData)
            return res.status(404).json({ msg: "Degree not found" });

        res.status(200).json({ degree: degreeData });

    } catch (error) {
        next(error);
    }
}

const deleteDegree = async (req, res, next) => {
    try {
        const { id } = req.params;

        const degreeData = await DegreeSchema.findByIdAndDelete({_id: id});
        if (!degreeData)
            return res.status(404).json({ msg: "Degree not found" });

        res.status(200).json({ degree: degreeData });

    } catch (error) {
        next(error);
    }
}

const getAllDegrees = async (req, res, next) => {
    try {
        const degrees = await DegreeSchema.find({});

        if (degrees.length <= 0) 
            return res.status(404).json({ msg: "No degrees found" });
        
        res.status(200).json({ degrees });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createDegree,
    updateDegree,
    deleteDegree,
    getAllDegrees,
}