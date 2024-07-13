const mongoose = require("mongoose"); 

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    yearsOfExperience: {
        type: Number,
        required: true,
        min: 0,
        max: 50
    },
    proficiency: {
        type: String,
        required: true,
        enum: ["Beginner", "Intermediate", "Advanced", "N/A"]
    },
    icon: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Skill", skillSchema);