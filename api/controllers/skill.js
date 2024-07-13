const Skill = require('../models/skill')

const createSkill = async (req, res, next) => {
    try {
        const { name, type, proficiency, yearsOfExperience, icon } = req.body;

        if (!name || !type || !proficiency || !yearsOfExperience || !icon) 
            return res.json({ msg: "Missing required fields" });

        const skillExist = await Skill.findOne({ name });
        if (skillExist)
            return res.json({ msg: "Skill already exists" });

        const skillData = await Skill.create({ name, type, proficiency, yearsOfExperience, icon });
        res.json({ skillData });

    } catch (error) {
        next(error);
    } 
}

const getSkills = async (req, res, next) => {
    try {
        const skills = await Skill.find({});

        if ( skills.length <= 0 ) 
            res.json({ msg: "No skills found" });
        
        res.json({ skills });
    } catch (error) {
        next(error);
    }
}

const updateSkill = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!data || Object.keys(data).length === 0)
            return res.json({ msg: "No data provided" });

        if (
            (data.name !== undefined && data.name.length === 0) || 
            (data.icon !== undefined && data.icon.length === 0) || 
            (data.type !== undefined && data.type.length === 0) || 
            (data.proficiency !== undefined && data.proficiency.length === 0) || 
            (data.yearsOfExperience !== undefined && !Number.isInteger(data.yearsOfExperience))
        )
            return res.json({ msg: "Missing required fields" });

        const skill = await Skill.findByIdAndUpdate({_id: id}, data, { new: true });

        if (!skill)
            return res.json({ msg: "Skill not found" });

        res.json({ skill });

    } catch (error) {
        next(error);
    }
}

const deleteSkill = async (req, res, next) => {
    try {
        const { id } = req.params;

        const skill = await Skill.findByIdAndDelete({_id: id});

        if (!skill)
            return res.json({ msg: "Skill not found" });

        res.json({ skill });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createSkill,
    getSkills,
    updateSkill,
    deleteSkill,
}