const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    family: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirm: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin", "super-admin"],
        default: "user"
    },
});

UserSchema.pre('save', async function (next) {
    // * 1) Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
    // * 2) Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    // * 3) Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
});

UserSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;