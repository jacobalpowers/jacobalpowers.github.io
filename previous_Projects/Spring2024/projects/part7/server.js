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

const cardSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    game: String,
    set: String,
    img: String,
    description: String,
});

const Card = mongoose.model("Card", cardSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/home.html");
});


app.listen(3000, () => {
    console.log("I'm Listening");
});

app.get("/api/cards", (req, res) => {
    getCards(res);
});

const getCards = async (res) => {
    const cards = await Card.find();
    res.send(cards);
}