const mongoose = require("mongoose");

const myJobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    location: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true
    },
    responsibilities: [{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500
    }]
});

module.exports = mongoose.model("MyJob", myJobSchema);