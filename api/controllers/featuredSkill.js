const FeaturedSkill = require('../models/featuredSkill')
const Skill = require('../models/skill')

const createFeaturedSkill = async (req, res, next) => {
    try {
        const { skillId } = req.body;

        if ( !skillId )
            return res.json({ msg: "Missing required fields", status: false });

        const skillExist = await Skill.findById(skillId);
        if (!skillExist)
            return res.json({ msg: "Skill not found", status: false });

        const featuredSkillExist = await FeaturedSkill.findOne({ skillId });
        if (featuredSkillExist)
            return res.json({ msg: "Featured skill already exists", status: false });

        const featuredSkill = await FeaturedSkill.create({ skillId });
        return res.json({ status: true, featuredSkill });

    } catch (error) {
        next(error);
    }
}

const deleteFeaturedSkill = async (req, res, next) => {
    try {
        const { id } = req.params;

        const featuredSkill = await FeaturedSkill.findByIdAndDelete({_id: id});

        if (!featuredSkill)
            return res.json({ msg: "Featured skill not found", status: false });

        return res.json({ status: true, featuredSkill });

    } catch (error) {
        next(error);
    }
}

const getFeaturedSkills = async (req, res, next) => {
    try {
        const featuredSkills = await FeaturedSkill.find({}).populate("skillId");

        if (featuredSkills.length === 0)
            return res.json({ msg: "No featured skills found", status: false });
        
        return res.json({ status: true, featuredSkills });
    } catch (error) {
        next(error);
    }
}

const updateFeaturedSkill = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;

        if (!data || Object.keys(data).length === 0)
            return res.json({ msg: "No data provided", status: false });

        if (data.skillId !== undefined && data.skillId.length === 0)
            return res.json({ msg: "Missing required field", status: false });

        const featuredSkill = await FeaturedSkill.findByIdAndUpdate(id, data, { new: true });

        if (!featuredSkill)
            return res.json({ msg: "Featured skill not found", status: false });

        return res.json({ status: true, featuredSkill });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createFeaturedSkill,
    deleteFeaturedSkill,
    getFeaturedSkills,
    updateFeaturedSkill
}