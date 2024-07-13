const mongoose = require("mongoose");

const experienceSummarySchema = new mongoose.Schema({
    duration: {
        type: Number,
        required: true
    },
    clients: {
        type: Number,
        required: true
    },
    projects: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("ExperienceSummary", experienceSummarySchema);