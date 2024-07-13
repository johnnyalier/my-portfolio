const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        match: /^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/
    },
    occupation: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    }
});

module.exports = mongoose.model("User", userSchema);