const mongoose = require('mongoose');
const app = require('./app');


// * Create database connection
mongoose.connect(process.env.DATABASE_URI)
    .then(() => console.log("MongoDB connected successfully 😎"))
    .catch(error => console.log(error));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on por ${port}...`);
});