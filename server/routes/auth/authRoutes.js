const express = require('express');
const { register, hi, login } = require('../../controllers/auth/authController');

const router = express.Router();

router
    .route("/register")
    .post(register)

router
    .route("/login")
    .post(login)

module.exports = router;