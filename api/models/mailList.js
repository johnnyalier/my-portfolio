const mongoose = require("mongoose"); 

const mailListSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            message: "Invalid email format"
        }
    }
});

module.exports = mongoose.model("MailList", mailListSchema);