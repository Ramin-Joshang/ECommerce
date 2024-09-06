const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
// * Register
const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ username, email, hashPassword });
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "Registration successful"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Some error occurred"
        })
    }
};

// * Login
const login = async (req, res) => {
    const { username, email, password } = req.body;
    try {

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Some error occurred"
        })
    }
};
// * Logout

// * Middleware

module.exports = { register };