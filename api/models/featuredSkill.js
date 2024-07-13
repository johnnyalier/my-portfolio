const mongoose = require("mongoose");

const featureSkillSchema = new mongoose.Schema({
    skillId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Skill",
        required: true
    }
});

module.exports = mongoose.model("FeatureSkill", featureSkillSchema);