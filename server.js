const express = require("express");
const app = express();
const joi = require("joi");
const mongoose = require("mongoose");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

mongoose
    .connect("mongodb+srv://japowers:RUD1IMizJvcIr6Q4@data.wtiy9yq.mongodb.net/")
    .then(() => console.log("Connected to mongodb..."))
    .catch((err) => console.error("Could not connect to mongodb...", err));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, () => {
    console.log("I'm Listening");
});