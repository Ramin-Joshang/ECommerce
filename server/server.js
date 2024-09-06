const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require("./routes/auth/authRoutes")

// * Create database connection

mongoose.connect("mongodb+srv://Ramin:.kbpZGf9J!r3Hbz@cluster0.p9ajz.mongodb.net/")
    .then(() => console.log("MongoDB connected successfully 😎"))
    .catch(error => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173/",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Authorization', 'Content-Type', 'Cache-Control', 'Expires', 'Pragma'],
        credentials: true
    })
);

app.use(cookieParser);
app.use(express.json());
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));