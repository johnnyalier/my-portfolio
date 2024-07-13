const mongoose = require("mongoose"); 

const myProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    type: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    url: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["To do", "In Progress", "Completed"]
    },
    summary: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
});

module.exports = mongoose.model("MyProject", myProjectSchema);