const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const AppError = require('../../utils/appError');
const sendResponse = require('../../utils/response');

// * Generate JWT
const signToken = id => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

// * Send JWT

const sendToken = (user, statusCode, res) => {
    const token = signToken(user._id);
    // const cookieOptions = {
    //     expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    //     httpOnly: true
    // }
    // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    // res.cookie("jwt", token, cookieOptions);

    // * Remove the passwords from the output
    user.password = undefined;

    sendResponse(res, "به فروشگاه رامین خوش آمدید", statusCode, user, token);
}

// * Register
const register = async (req, res, next) => {
    const { name, family, email, password, passwordConfirm } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            return sendResponse(res, "شما از قبل حساب کاربری با این ایمیل دارید.");
        }
        if (password === passwordConfirm) {
            await User.create({
                name: name,
                family: family,
                email: email,
                password: password,
                passwordConfirm: passwordConfirm
            })
            sendResponse(res, "ثبت نام با موفقیت انجام شد.", 200)
        } else {
            sendResponse(res, "تکرار رمز عبور یکسان نیست.")
        }
    } catch (error) {
        sendResponse(res, "مشکلی در ارتباط با سرور پیش آمد.")
    }
};

// * Login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // * 1) Check if user exists & password is correct
        const user = await User.findOne({ email }).select("+password");
        console.log(user)
        console.log("hiiiiiiiiiiii")
        if (!user) {
            console.log("hi")
            return sendResponse(res, "کاربری با این مشخصات یافت نشد.");
        } else {
            const isPasswordCorrect = await user.correctPassword(password, user.password);
            if (!isPasswordCorrect) {
                return sendResponse(res, "کاربری با این مشخصات یافت نشد.");
            } else {
                // * 2) If everything ok, send token to client
                sendToken(user, 200, res)
            }
        }
    } catch (error) {
        sendResponse(res, "مشکلی در ارتباط با سرور پیش آمد.")
    }
};


// * Logout

// * Middleware

module.exports = { register, login };