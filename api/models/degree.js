const mongoose = require("mongoose"); 

const degreeSchema = new mongoose.Schema({
    degree: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    institution: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    location: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    graduationYear: {
        type: Number,
        required: true,
        min: 2018,
        max: new Date().getFullYear()
    },
    summary: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    }
});

module.exports = mongoose.model("Degree", degreeSchema);