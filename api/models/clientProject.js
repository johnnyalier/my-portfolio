const mongoose = require("mongoose"); 

const clientProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        // match: /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/
    },
    projectTitle: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    projectDetails: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    }
})

module.exports = mongoose.model("ClientProject", clientProjectSchema);