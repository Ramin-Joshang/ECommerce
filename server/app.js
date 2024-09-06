const express = require('express');
const authRouter = require("./routes/auth/authRoutes")
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

dotenv.config({ path: './config.env' });

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Authorization', 'Content-Type', 'Cache-Control', 'Expires', 'Pragma'],
        credentials: true
    })
);

// app.use(cookieParser);
app.use(express.json());

// Data

app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
    console.log("Hello from the middleware 👋");
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toDateString();
    // console.log(req.headers)
    next();
})
// * 3) Routes
app.use('/api/auth', authRouter);

module.exports = app;