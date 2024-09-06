const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unite: true
    },
    email: {
        type: String,
        required: true,
        unite: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user"
    },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;