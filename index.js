const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const cookieParser=require("cookie-parser")
const {restrictToLoggedInUserOnly}=require("./src/middleware/auth.js")

const handleRouter = require("./src/routers/AuthenticationRouters.router.js");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
// Setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve("./src/views"));

// Route handling
app.use("/api",restrictToLoggedInUserOnly, handleRouter);

const port = 8000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/UserAuthentication")
    .then(() => {
        console.log("MongoDB is connected successfully");
    })
    .catch((err) => {
        console.log("Something went wrong; MongoDB is not connected successfully", err);
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
