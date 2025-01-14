const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide name'],

    },

    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
    },
});


module.exports = mongoose.model("User", UserSchema);